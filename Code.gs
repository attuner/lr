/**
 * Configuration Constants
 */
const SHEET_NAME = "RadioSchedule";
const DEFAULT_HEADERS = ["startTime", "endTime", "title", "category", "language", "url"];

// 20+ Curated Public / Open-Source Streams: India & International (News, Learning, Entertainment)
const DEFAULT_STATIONS = [
  // --- NEWS (India & International) ---
  ["05:00", "06:00", "AIR News 24x7 (India)", "News", "Hindi/English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/allindianews/playlist.m3u8"],
  ["06:00", "07:00", "LBC News London", "News", "English", "https://media-ice.musicradio.com/LBCNewsUKMP3"],
  ["07:00", "08:00", "BBC World Service", "News", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"],
  ["08:00", "09:00", "NPR News 24 Hour", "News", "English", "https://npr-ice.streamguys1.com/live.mp3"],
  ["09:00", "10:00", "Bloomberg Radio", "News", "English", "https://bbg-ice.streamguys1.com/live-mp3"],

  // --- REGIONAL & TELUGU ENTERTAINMENT ---
  ["10:00", "11:00", "AIR Hyderabad (Telangana)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airtelugu/playlist.m3u8"],
  ["11:00", "12:00", "Radio City Telugu", "Entertainment", "Telugu", "https://prclive4.listen2myradio.com/live.mp3?type=s1&mount=/8136"],
  ["12:00", "13:00", "Telugu NRI Radio", "Entertainment", "Telugu", "https://stream.zeno.fm/f3wvbbk8v18uv"],
  ["13:00", "14:00", "Hungama Telugu Hits", "Entertainment", "Telugu", "https://stream.zeno.fm/2w3x84y12reuv"],
  ["14:00", "15:00", "AIR Vividh Bharati National", "Entertainment", "Hindi", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/vividhbharati/playlist.m3u8"],

  // --- LEARNING, TALKS & SCIENCE ---
  ["15:00", "16:00", "BBC Radio 4 (Science & Arts)", "Learning", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm"],
  ["16:00", "17:00", "WNYC AM (Podcasts & Debate)", "Learning", "English", "https://fm939.wnyc.org/wnycfm-web"],
  ["17:00", "18:00", "KEXP Discovery & Learning", "Learning", "English", "https://kexp.streamguys1.com/kexp160.aac"],
  ["18:00", "19:00", "KQED Public Radio Talks", "Learning", "English", "https://streams.kqed.org/kqedradio.mp3"],

  // --- GLOBAL MUSIC & ENTERTAINMENT ---
  ["19:00", "20:00", "Capital FM UK (Hit Music)", "Entertainment", "English", "https://media-ice.musicradio.com/CapitalMP3"],
  ["20:00", "21:00", "Heart UK (80s & 90s Hits)", "Entertainment", "English", "https://media-ice.musicradio.com/HeartUKMP3"],
  ["21:00", "22:00", "AIR Raagam (Indian Classical)", "Entertainment", "Carnatic/Hindustani", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airragam/playlist.m3u8"],
  ["22:00", "23:00", "Smooth Radio UK (Relaxing)", "Entertainment", "English", "https://media-ice.musicradio.com/SmoothUKMP3"],
  ["23:00", "00:00", "Classic FM London", "Entertainment", "English", "https://media-ice.musicradio.com/ClassicFMMP3"],
  ["00:00", "02:00", "SomaFM Groove Salad (Chillout)", "Entertainment", "English", "https://ice1.somafm.com/groovesalad-128-mp3"],
  ["02:00", "05:00", "Jazz24 (Global Jazz Standards)", "Entertainment", "English", "https://live.wostreaming.net/manifest/ppm-jazz24aac-ibc1.m3u8"]
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Radio Scheduler")
    .addItem("Initialize / Reset Sheet", "initSheet")
    .addToUi();
}

function initSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) {
    const headerRange = sheet.getRange(1, 1, 1, DEFAULT_HEADERS.length);
    headerRange.setValues([DEFAULT_HEADERS]);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1e293b");
    headerRange.setFontColor("#f8fafc");
    headerRange.setHorizontalAlignment("center");

    sheet.getRange(2, 1, DEFAULT_STATIONS.length, DEFAULT_HEADERS.length)
         .setValues(DEFAULT_STATIONS);

    sheet.getRange(2, 1, sheet.getMaxRows() - 1, 2).setNumberFormat("@");
    sheet.autoResizeColumns(1, DEFAULT_HEADERS.length);
  }

  return sheet;
}

function doGet(e) {
  try {
    const sheet = initSheet();
    const rows = sheet.getDataRange().getValues();

    if (rows.length < 2) {
      return ContentService.createTextOutput(JSON.stringify({ channels: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const headers = rows[0].map(h => h.toString().trim());
    const data = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row[0]) continue;

      let item = {};
      headers.forEach((header, colIndex) => {
        let val = row[colIndex];
        if (val instanceof Date) {
          const hours = String(val.getHours()).padStart(2, "0");
          const minutes = String(val.getMinutes()).padStart(2, "0");
          val = `${hours}:${minutes}`;
        }
        item[header] = val;
      });
      data.push(item);
    }

    return ContentService.createTextOutput(JSON.stringify({ channels: data }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const sheet = initSheet();
    const body = JSON.parse(e.postData.contents);
    const newSchedule = body.channels;

    if (!Array.isArray(newSchedule)) {
      throw new Error("Invalid payload format");
    }

    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.getRange(2, 1, lastRow - 1, DEFAULT_HEADERS.length).clearContent();
    }

    const rowsToInsert = newSchedule.map(item => [
      item.startTime,
      item.endTime,
      item.title,
      item.category || "General",
      item.language || "English",
      item.url
    ]);

    if (rowsToInsert.length > 0) {
      sheet.getRange(2, 1, rowsToInsert.length, DEFAULT_HEADERS.length)
           .setValues(rowsToInsert);
      sheet.getRange(2, 1, rowsToInsert.length, 2).setNumberFormat("@");
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}