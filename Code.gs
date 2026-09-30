/**
 * Configuration Constants
 */
const SHEET_NAME = "RadioSchedule";
const DEFAULT_HEADERS = ["startTime", "endTime", "title", "category", "language", "url"];

// 40+ Curated Public / Open-Source Streams: India & International
const DEFAULT_STATIONS = [
  // --- NEWS & TALKS (INDIA & INTERNATIONAL) ---
  ["05:00", "05:30", "AIR News 24x7 (India)", "News", "Hindi/English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/allindianews/playlist.m3u8"],
  ["05:30", "06:00", "LBC News London", "News", "English", "https://media-ice.musicradio.com/LBCNewsUKMP3"],
  ["06:00", "06:30", "BBC World Service", "News", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"],
  ["06:30", "07:00", "NPR News 24 Hour", "News", "English", "https://npr-ice.streamguys1.com/live.mp3"],
  ["07:00", "07:30", "Bloomberg Radio", "News", "English", "https://bbg-ice.streamguys1.com/live-mp3"],
  ["07:30", "08:00", "France 24 English Radio", "News", "English", "https://stream.radiofrance.fr/fip/fip.m3u8"],
  ["08:00", "08:30", "CBC Radio One (Canada)", "News", "English", "https://cbcliveradio.akamaized.net/hls/live/2041734/ES_R1OTT/master.m3u8"],
  ["08:30", "09:00", "Deutsche Welle Radio", "News", "English", "https://dwstream4-lh.akamaihd.net/i/radio04_en@82542/master.m3u8"],
  ["09:00", "09:30", "ABC News Radio (Australia)", "News", "English", "https://live-radio01.mediahubaustralia.com/2LRW/mp3/"],
  ["09:30", "10:00", "RTE Radio 1 (Ireland)", "News", "English", "https://icecast2.rte.ie/radio1"],

  // --- TELUGU & INDIAN REGIONAL ---
  ["10:00", "10:30", "AIR Hyderabad (Telangana)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airtelugu/playlist.m3u8"],
  ["10:30", "11:00", "Radio City Telugu", "Entertainment", "Telugu", "https://prclive4.listen2myradio.com/live.mp3?type=s1&mount=/8136"],
  ["11:00", "11:30", "Telugu NRI Radio", "Entertainment", "Telugu", "https://stream.zeno.fm/f3wvbbk8v18uv"],
  ["11:30", "12:00", "Hungama Telugu Hits", "Entertainment", "Telugu", "https://stream.zeno.fm/2w3x84y12reuv"],
  ["12:00", "12:30", "AIR Vijayawada (AP)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airvijayawada/playlist.m3u8"],
  ["12:30", "13:00", "AIR Visakhapatnam", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airvisakhapatnam/playlist.m3u8"],
  ["13:00", "13:30", "AIR Vividh Bharati", "Entertainment", "Hindi", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/vividhbharati/playlist.m3u8"],
  ["13:30", "14:00", "Radio Mirchi Top 20", "Entertainment", "Hindi", "https://stream.zeno.fm/0r0xa792kwzuv"],
  ["14:00", "14:30", "AIR FM Gold Delhi", "Entertainment", "Hindi", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/fmgold/playlist.m3u8"],
  ["14:30", "15:00", "AIR FM Rainbow", "Entertainment", "Hindi/English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/fmrainbow/playlist.m3u8"],

  // --- LEARNING, SCIENCE, ARTS & TALKS ---
  ["15:00", "15:30", "BBC Radio 4 (Science & Arts)", "Learning", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm"],
  ["15:30", "16:00", "WNYC AM (Podcasts & Debate)", "Learning", "English", "https://fm939.wnyc.org/wnycfm-web"],
  ["16:00", "16:30", "KQED Public Talks (San Francisco)", "Learning", "English", "https://streams.kqed.org/kqedradio.mp3"],
  ["16:30", "17:00", "WBUR Public Radio (Boston)", "Learning", "English", "https://wbur-ice.streamguys1.com/wbur_aac"],
  ["17:00", "17:30", "KEXP Discovery & Education", "Learning", "English", "https://kexp.streamguys1.com/kexp160.aac"],
  ["17:30", "18:00", "KCRW Eclectic Talks (Los Angeles)", "Learning", "English", "https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air"],
  ["18:00", "18:30", "Radio New Zealand National", "Learning", "English", "https://stream.radionz.co.nz/national.mp3"],
  ["18:30", "19:00", "ABC Radio National (Australia)", "Learning", "English", "https://live-radio01.mediahubaustralia.com/2RNW/mp3/"],
  ["19:00", "19:30", "Philosophy & Science Radio", "Learning", "English", "https://ice1.somafm.com/missioncontrol-128-mp3"],
  ["19:30", "20:00", "Third Rock Radio (NASA Tech)", "Learning", "English", "https://feed.tunein.com/profiles/p443216/nowPlaying"],

  // --- MUSIC & ENTERTAINMENT (GLOBAL & CLASSICAL) ---
  ["20:00", "20:30", "Capital FM UK (Global Hits)", "Entertainment", "English", "https://media-ice.musicradio.com/CapitalMP3"],
  ["20:30", "21:00", "Heart UK (80s & 90s Hits)", "Entertainment", "English", "https://media-ice.musicradio.com/HeartUKMP3"],
  ["21:00", "21:30", "AIR Raagam (Indian Classical)", "Entertainment", "Carnatic/Hindustani", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airragam/playlist.m3u8"],
  ["21:30", "22:00", "Smooth Radio UK (Mellow)", "Entertainment", "English", "https://media-ice.musicradio.com/SmoothUKMP3"],
  ["22:00", "22:30", "Classic FM London", "Entertainment", "English", "https://media-ice.musicradio.com/ClassicFMMP3"],
  ["22:30", "23:00", "WRTI Classical & Jazz (Philadelphia)", "Entertainment", "English", "https://wrti-ice.streamguys1.com/wrti-mp3-128"],
  ["23:00", "23:30", "SomaFM Groove Salad (Ambient)", "Entertainment", "English", "https://ice1.somafm.com/groovesalad-128-mp3"],
  ["23:30", "00:30", "SomaFM Drone Zone (Sleep Ambient)", "Entertainment", "English", "https://ice1.somafm.com/dronezone-128-mp3"],
  ["00:30", "02:30", "Jazz24 (Global Standards)", "Entertainment", "English", "https://live.wostreaming.net/manifest/ppm-jazz24aac-ibc1.m3u8"],
  ["02:30", "05:00", "Swiss Classic Radio", "Entertainment", "Classical", "https://stream.srg-ssr.ch/m/rsc_de/mp3_128"]
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
    let payload = e.postData ? e.postData.contents : null;
    if (!payload) throw new Error("No data payload received");

    const body = JSON.parse(payload);
    const newSchedule = body.channels;

    if (!Array.isArray(newSchedule)) {
      throw new Error("Invalid payload format. Expected channels array.");
    }

    // Clear existing data rows below header
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.getRange(2, 1, lastRow - 1, DEFAULT_HEADERS.length).clearContent();
    }

    const rowsToInsert = newSchedule.map(item => [
      String(item.startTime || "").trim(),
      String(item.endTime || "").trim(),
      String(item.title || "").trim(),
      String(item.category || "General").trim(),
      String(item.language || "English").trim(),
      String(item.url || "").trim()
    ]);

    if (rowsToInsert.length > 0) {
      sheet.getRange(2, 1, rowsToInsert.length, DEFAULT_HEADERS.length)
           .setValues(rowsToInsert);
      sheet.getRange(2, 1, rowsToInsert.length, 2).setNumberFormat("@");
    }

    SpreadsheetApp.flush(); // Forces immediate write to the Google Sheet

    return ContentService.createTextOutput(JSON.stringify({ status: "success", count: rowsToInsert.length }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}