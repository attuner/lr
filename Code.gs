/**
 * Configuration Constants
 */
const SHEET_NAME = "RadioSchedule";
const DEFAULT_HEADERS = ["startTime", "endTime", "title", "category", "language", "url"];

// Filtered and Expanded 59-Station Schedule
const DEFAULT_STATIONS = [
  // ==========================================
  // 1. SPECIFIED 19 CORE STATIONS
  // ==========================================
  ["05:00", "05:20", "Fun Kids UK (Live Radio)", "Kids", "English", "https://radio.canstream.co.uk:8021/live.mp3"],
  ["05:20", "05:40", "Radio Mirchi Top 20", "Entertainment", "Hindi", "https://stream.zeno.fm/0r0xa792kwzuv"],
  ["05:40", "06:00", "BBC World Service", "News", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"],
  ["06:00", "06:20", "NPR News 24 Hour", "News", "English", "https://npr-ice.streamguys1.com/live.mp3"],
  ["06:20", "06:40", "LBC News London", "News", "English", "https://media-ice.musicradio.com/LBCNewsUKMP3"],
  ["06:40", "07:00", "France 24 English Radio", "News", "English", "https://stream.radiofrance.fr/fip/fip.m3u8"],
  ["07:00", "07:20", "Times Radio UK", "News", "English", "https://timesradio.wireless.radio/stream"],
  ["07:20", "07:40", "WNYC AM (Podcasts & Debate)", "Learning", "English", "https://fm939.wnyc.org/wnycfm-web"],
  ["07:40", "08:00", "KQED Public Talks (San Francisco)", "Learning", "English", "https://streams.kqed.org/kqedradio.mp3"],
  ["08:00", "08:20", "KEXP Discovery & Education", "Learning", "English", "https://kexp.streamguys1.com/kexp160.aac"],
  ["08:20", "08:40", "WBEZ Chicago Public Radio", "Learning", "English", "https://stream.wbez.org/wbez128.mp3"],
  ["08:40", "09:00", "Capital FM UK (Global Hits)", "Entertainment", "English", "https://media-ice.musicradio.com/CapitalMP3"],
  ["09:00", "09:20", "Heart UK (80s & 90s Hits)", "Entertainment", "English", "https://media-ice.musicradio.com/HeartUKMP3"],
  ["09:20", "09:40", "Smooth Radio UK (Relaxing Favorites)", "Entertainment", "English", "https://media-ice.musicradio.com/SmoothUKMP3"],
  ["09:40", "10:00", "Classic FM London", "Entertainment", "English", "https://media-ice.musicradio.com/ClassicFMMP3"],
  ["10:00", "10:20", "Radio X UK (Indie Rock)", "Entertainment", "English", "https://media-ice.musicradio.com/RadioXUKMP3"],
  ["10:20", "10:40", "Gold Radio UK (Classic Oldies)", "Entertainment", "English", "https://media-ice.musicradio.com/GoldMP3"],
  ["10:40", "11:00", "Swiss Classic Radio", "Entertainment", "Classical", "https://stream.srg-ssr.ch/m/rsc_de/mp3_128"],
  ["11:00", "11:20", "WQXR Classical New York", "Entertainment", "English", "https://stream.wqxr.org/wqxr-web"],

  // ==========================================
  // 2. 20 ASIAN ENGLISH & LEARNING RADIOS
  // ==========================================
  ["11:20", "11:40", "CNA938 News (Singapore Mediacorp)", "News", "English", "https://mediacorp.rastream.com/cna938"],
  ["11:40", "12:00", "NHK World-Japan English", "Learning", "English", "https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-radio/global/2007545/live.m3u8"],
  ["12:00", "12:20", "KBS World Radio English (South Korea)", "Learning", "English", "https://world.kbs.co.kr/live/radio/ch1/playlist.m3u8"],
  ["12:20", "12:40", "RTHK Radio 3 English (Hong Kong)", "News", "English", "https://stm.rthk.hk/radio3"],
  ["12:40", "13:00", "BFM 89.9 Business & Learning (Malaysia)", "Learning", "English", "https://stream.bfm.my/stream"],
  ["13:00", "13:20", "Traxx FM English (RTM Malaysia)", "Entertainment", "English", "https://traxxfm.rtm.gov.my/live"],
  ["13:20", "13:40", "Radio Thailand World Service English", "News", "English", "https://radiothai.prd.go.th/live/world/playlist.m3u8"],
  ["13:40", "14:00", "DZRJ 810 AM The Voice of the Philippines", "News", "English", "https://icecast.eradioportal.com:8443/dzrj_am"],
  ["14:00", "14:20", "Yes 93.3 Pop & Culture (Singapore)", "Entertainment", "English", "https://mediacorp.rastream.com/yes933"],
  ["14:20", "14:40", "Al Jazeera English Audio Channel", "News", "English", "https://live-hls-web-aje.getaj.net/AJE/01.m3u8"],
  ["14:40", "15:00", "Dubai Eye 103.8 (News & Education)", "Learning", "English", "https://stream.arn.ae/dubaieye.mp3"],
  ["15:00", "15:20", "SLBC English National Service (Sri Lanka)", "Learning", "English", "https://stream.zeno.fm/y1q8h55n908uv"],
  ["15:20", "15:40", "Radio Taiwan International English", "Learning", "English", "https://stream.rti.org.tw/live/rti-en/playlist.m3u8"],
  ["15:40", "16:00", "Gold 905 Mediacorp (Singapore)", "Entertainment", "English", "https://mediacorp.rastream.com/gold905"],
  ["16:00", "16:20", "City Plus FM Knowledge & Talks", "Learning", "English", "https://stream.cityplusfm.my/stream"],
  ["16:20", "16:40", "TBS e-FM 101.3 English (Seoul)", "Learning", "English", "https://efm.tbs.seoul.kr/live/efm.m3u8"],
  ["16:40", "17:00", "Voice of Vietnam International (VOV5 English)", "News", "English", "https://vov5.vov.gov.vn/live/playlist.m3u8"],
  ["17:00", "17:20", "UNESCO World Heritage & Knowledge Radio", "Learning", "English", "https://ice1.somafm.com/missioncontrol-128-mp3"],
  ["17:20", "17:40", "TED Talks Audio & Debate Channel", "Learning", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm"],
  ["17:40", "18:00", "World Nature & Discovery Stream", "Learning", "English", "https://ice1.somafm.com/groovesalad-128-mp3"],

  // ==========================================
  // 3. 20 INDIAN ENGLISH & TELUGU LIVE RADIOS
  // ==========================================
  ["18:00", "18:20", "AIR ESD English (External Services Division)", "News", "English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/esd/playlist.m3u8"],
  ["18:20", "18:40", "AIR National News Live (India)", "News", "English/Hindi", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/allindianews/playlist.m3u8"],
  ["18:40", "19:00", "AIR FM Rainbow India (Western & English Hits)", "Entertainment", "English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/fmrainbow/playlist.m3u8"],
  ["19:00", "19:20", "AIR FM Gold English Talks & Classic Hour", "Learning", "English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/fmgold/playlist.m3u8"],
  ["19:20", "19:40", "IndiEarth Outernational (Indie English India)", "Entertainment", "English", "https://stream.zeno.fm/4vbg657p2zquv"],
  ["19:40", "20:00", "AIR Hyderabad Live (Telangana)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airtelugu/playlist.m3u8"],
  ["20:00", "20:20", "Radio City Telugu Live", "Entertainment", "Telugu", "https://prclive4.listen2myradio.com/live.mp3?type=s1&mount=/8136"],
  ["20:20", "20:40", "Telugu NRI Live Radio", "Entertainment", "Telugu", "https://stream.zeno.fm/f3wvbbk8v18uv"],
  ["20:40", "21:00", "Hungama Telugu Super Hits", "Entertainment", "Telugu", "https://stream.zeno.fm/2w3x84y12reuv"],
  ["21:00", "21:20", "AIR Vijayawada Rainbow Live (AP)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airvijayawada/playlist.m3u8"],
  ["21:20", "21:40", "AIR Visakhapatnam Live", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airvisakhapatnam/playlist.m3u8"],
  ["21:40", "22:00", "AIR Warangal Live (Telangana)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airwarangal/playlist.m3u8"],
  ["22:00", "22:20", "AIR Tirupati Live", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airtirupati/playlist.m3u8"],
  ["22:20", "22:40", "AIR Kurnool Live", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airkurnool/playlist.m3u8"],
  ["22:40", "23:00", "AIR Kothagudem Live", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airkothagudem/playlist.m3u8"],
  ["23:00", "23:20", "AIR Nizamabad Live", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airnizamabad/playlist.m3u8"],
  ["23:20", "23:40", "AIR Raagam Carnatic Classical Live", "Entertainment", "Telugu/Sanskrit", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airragam/playlist.m3u8"],
  ["23:40", "00:00", "Bhakti Tarangini Telugu Radio", "Entertainment", "Telugu", "https://stream.zeno.fm/n56s4b374zuvv"],
  ["00:00", "02:30", "Telugu One Radio TORi Live", "Entertainment", "Telugu", "https://stream.zeno.fm/s4k8qfv2m4zuv"],
  ["02:30", "05:00", "Telugu Christian Fellowship Radio", "Entertainment", "Telugu", "https://stream.zeno.fm/4wvqq77y2reuv"]
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

  // Clear existing content and force-sync current clean catalog
  sheet.clear();

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

    SpreadsheetApp.flush();

    return ContentService.createTextOutput(JSON.stringify({ status: "success", count: rowsToInsert.length }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}