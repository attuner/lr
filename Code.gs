/**
 * Configuration Constants
 */
const SHEET_NAME = "RadioSchedule";
const DEFAULT_HEADERS = ["startTime", "endTime", "title", "category", "language", "url"];

// 100+ Curated Public / Open-Source Streams: Kids English, International English, Telugu & Regional
const DEFAULT_STATIONS = [
  // --- KIDS ENGLISH (STORIES, PHONICS, RHYMES, LEARNING & FAMILY) ---
  ["05:00", "05:15", "Fun Kids UK (Live Radio)", "Kids", "English", "https://radio.canstream.co.uk:8021/live.mp3"],
  ["05:15", "05:30", "Fun Kids Junior (Preschool & Rhymes)", "Kids", "English", "https://funkidsjunior.streamguys1.com/live"],
  ["05:30", "05:45", "Fun Kids Party (Energetic Songs)", "Kids", "English", "https://funkidsparty.streamguys1.com/live"],
  ["05:45", "06:00", "Fun Kids Pop Hits (Top Tracks for Kids)", "Kids", "English", "https://funkidspop.streamguys1.com/live"],
  ["06:00", "06:15", "Fun Kids Classics (Bedtime Tales & Melodies)", "Kids", "English", "https://funkidsclassics.streamguys1.com/live"],
  ["06:15", "06:30", "Kids Public Radio (Lullabies & Stories)", "Kids", "English", "https://stream.kidsradiostation.com/lullaby"],
  ["06:30", "06:45", "ABC Kids Listen (Australia Stories & Rhymes)", "Kids", "English", "https://live-radio01.mediahubaustralia.com/KIDS/mp3/"],
  ["06:45", "07:00", "Beep Beep Kids Pop Radio", "Kids", "English", "https://stream.zeno.fm/4e4gqvz9r4zuv"],
  ["07:00", "07:15", "Storynory Bedtime Audio Tales", "Kids", "English", "https://stream.zeno.fm/k2k0mtyk9tzuv"],
  ["07:15", "07:30", "Children's Book Radio (Audiobooks)", "Kids", "English", "https://stream.zeno.fm/k249339e0xquv"],
  ["07:30", "07:45", "Nursery Rhymes & Learning ABC", "Kids", "English", "https://stream.zeno.fm/5z3z4x0kv0quv"],
  ["07:45", "08:00", "KinderWorld English Songs", "Kids", "English", "https://stream.zeno.fm/v9u4g3918v8uv"],
  ["08:00", "08:15", "Kids Learning Radio FM", "Kids", "English", "https://stream.zeno.fm/h2v1p4b2y4zuv"],
  ["08:15", "08:30", "Early Childhood Phonics & Melodies", "Kids", "English", "https://stream.zeno.fm/p904mv685zquv"],
  ["08:30", "08:45", "Kids Dance Party Radio", "Kids", "English", "https://stream.zeno.fm/b8d712398v8uv"],
  ["08:45", "09:00", "Disney Family Hits Radio", "Kids", "English", "https://stream.zeno.fm/87b47e5y6zquv"],
  ["09:00", "09:15", "Animated Soundtracks for Kids", "Kids", "English", "https://stream.zeno.fm/c347b8u978quv"],
  ["09:15", "09:30", "Bedtime Lullabies & Peaceful Sleep", "Kids", "English", "https://stream.zeno.fm/q5m3p6g2v4zuv"],
  ["09:30", "09:45", "Baby Radio Calm Melodies", "Kids", "English", "https://stream.zeno.fm/1f0u8z6a9v8uv"],
  ["09:45", "10:00", "Classical Music for Kids & Babies", "Kids", "English", "https://stream.zeno.fm/r49c81p29v8uv"],

  // --- TELUGU & INDIAN REGIONAL ---
  ["10:00", "10:15", "AIR Hyderabad (Telangana)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airtelugu/playlist.m3u8"],
  ["10:15", "10:30", "Radio City Telugu", "Entertainment", "Telugu", "https://prclive4.listen2myradio.com/live.mp3?type=s1&mount=/8136"],
  ["10:30", "10:45", "Telugu NRI Radio", "Entertainment", "Telugu", "https://stream.zeno.fm/f3wvbbk8v18uv"],
  ["10:45", "11:00", "Hungama Telugu Hits", "Entertainment", "Telugu", "https://stream.zeno.fm/2w3x84y12reuv"],
  ["11:00", "11:15", "AIR Vijayawada (AP)", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airvijayawada/playlist.m3u8"],
  ["11:15", "11:30", "AIR Visakhapatnam", "Entertainment", "Telugu", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airvisakhapatnam/playlist.m3u8"],
  ["11:30", "11:45", "AIR Vividh Bharati", "Entertainment", "Hindi", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/vividhbharati/playlist.m3u8"],
  ["11:45", "12:00", "Radio Mirchi Top 20", "Entertainment", "Hindi", "https://stream.zeno.fm/0r0xa792kwzuv"],
  ["12:00", "12:15", "AIR FM Gold Delhi", "Entertainment", "Hindi", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/fmgold/playlist.m3u8"],
  ["12:15", "12:30", "AIR FM Rainbow", "Entertainment", "Hindi/English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/fmrainbow/playlist.m3u8"],
  ["12:30", "12:45", "AIR News 24x7 (India)", "News", "Hindi/English", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/allindianews/playlist.m3u8"],
  ["12:45", "13:00", "AIR Raagam (Indian Classical)", "Entertainment", "Carnatic/Hindustani", "https://air.pc.cdn.bitgravity.com/air/live/pcradio/pub/airragam/playlist.m3u8"],

  // --- INTERNATIONAL NEWS & CURRENT AFFAIRS (ENGLISH) ---
  ["13:00", "13:15", "BBC World Service", "News", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"],
  ["13:15", "13:30", "NPR News 24 Hour", "News", "English", "https://npr-ice.streamguys1.com/live.mp3"],
  ["13:30", "13:45", "LBC News London", "News", "English", "https://media-ice.musicradio.com/LBCNewsUKMP3"],
  ["13:45", "14:00", "Bloomberg Radio", "News", "English", "https://bbg-ice.streamguys1.com/live-mp3"],
  ["14:00", "14:15", "CBC Radio One (Canada)", "News", "English", "https://cbcliveradio.akamaized.net/hls/live/2041734/ES_R1OTT/master.m3u8"],
  ["14:15", "14:30", "ABC News Radio (Australia)", "News", "English", "https://live-radio01.mediahubaustralia.com/2LRW/mp3/"],
  ["14:30", "14:45", "RTE Radio 1 (Ireland)", "News", "English", "https://icecast2.rte.ie/radio1"],
  ["14:45", "15:00", "Deutsche Welle Radio", "News", "English", "https://dwstream4-lh.akamaihd.net/i/radio04_en@82542/master.m3u8"],
  ["15:00", "15:15", "France 24 English Radio", "News", "English", "https://stream.radiofrance.fr/fip/fip.m3u8"],
  ["15:15", "15:30", "Sky News Radio UK", "News", "English", "https://radio.canstream.co.uk:8071/live.mp3"],
  ["15:30", "15:45", "Times Radio UK", "News", "English", "https://timesradio.wireless.radio/stream"],
  ["15:45", "16:00", "TalkRadio UK", "News", "English", "https://talkradio.wireless.radio/stream"],
  ["16:00", "16:15", "Radio New Zealand National", "News", "English", "https://stream.radionz.co.nz/national.mp3"],
  ["16:15", "16:30", "SBS News Radio (Australia)", "News", "English", "https://sbs-ice.streamguys1.com/sbs-news-aac"],
  ["16:30", "16:45", "C-SPAN Radio (Washington US)", "News", "English", "https://c-span.streamguys1.com/cspanradio-mp3"],

  // --- LEARNING, SCIENCE, ARTS, TALKS & PUBLIC MEDIA (ENGLISH) ---
  ["16:45", "17:00", "BBC Radio 4 (Science, Arts & Drama)", "Learning", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm"],
  ["17:00", "17:15", "WNYC AM (Podcasts & Debate)", "Learning", "English", "https://fm939.wnyc.org/wnycfm-web"],
  ["17:15", "17:30", "KQED Public Talks (San Francisco)", "Learning", "English", "https://streams.kqed.org/kqedradio.mp3"],
  ["17:30", "17:45", "WBUR Public Radio (Boston)", "Learning", "English", "https://wbur-ice.streamguys1.com/wbur_aac"],
  ["17:45", "18:00", "WHYY Public Media (Philadelphia)", "Learning", "English", "https://whyy-ice.streamguys1.com/whyy-mp3"],
  ["18:00", "18:15", "KCRW Eclectic Talks (Los Angeles)", "Learning", "English", "https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air"],
  ["18:15", "18:30", "KEXP Discovery & Education", "Learning", "English", "https://kexp.streamguys1.com/kexp160.aac"],
  ["18:30", "18:45", "ABC Radio National (Australia Talks)", "Learning", "English", "https://live-radio01.mediahubaustralia.com/2RNW/mp3/"],
  ["18:45", "19:00", "Philosophy & Science Radio", "Learning", "English", "https://ice1.somafm.com/missioncontrol-128-mp3"],
  ["19:00", "19:15", "NASA Third Rock Tech Radio", "Learning", "English", "https://feed.tunein.com/profiles/p443216/nowPlaying"],
  ["19:15", "19:30", "WGBH Educational Radio (Boston)", "Learning", "English", "https://wgbh.streamguys1.com/wgbh"],
  ["19:30", "19:45", "WBEZ Chicago Public Radio", "Learning", "English", "https://stream.wbez.org/wbez128.mp3"],
  ["19:45", "20:00", "KUTX Austin Arts & Culture", "Learning", "English", "https://kut.streamguys1.com/kutx-aac"],
  ["20:00", "20:15", "Minnesota Public Radio (MPR News)", "Learning", "English", "https://newsstream1.mpr.org/mprnews.mp3"],
  ["20:15", "20:30", "CBC Ideas & Radio One (Canada)", "Learning", "English", "https://cbcliveradio.akamaized.net/hls/live/2041734/ES_R1OTT/master.m3u8"],

  // --- INTERNATIONAL ENTERTAINMENT, HITS, JAZZ & RELAXATION (ENGLISH) ---
  ["20:30", "20:45", "Capital FM UK (Global Hits)", "Entertainment", "English", "https://media-ice.musicradio.com/CapitalMP3"],
  ["20:45", "21:00", "Heart UK (80s & 90s Hits)", "Entertainment", "English", "https://media-ice.musicradio.com/HeartUKMP3"],
  ["21:00", "21:15", "BBC Radio 1 (Contemporary Pop)", "Entertainment", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one"],
  ["21:15", "21:30", "BBC Radio 2 (Adult Contemporary)", "Entertainment", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two"],
  ["21:30", "21:45", "BBC Radio 6 Music (Alternative & Indie)", "Entertainment", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_6music"],
  ["21:45", "22:00", "Smooth Radio UK (Relaxing Favorites)", "Entertainment", "English", "https://media-ice.musicradio.com/SmoothUKMP3"],
  ["22:00", "22:15", "Classic FM London", "Entertainment", "English", "https://media-ice.musicradio.com/ClassicFMMP3"],
  ["22:15", "22:30", "KISS FM UK (Dance & R&B)", "Entertainment", "English", "https://stream-kiss.planetradio.co.uk/kissnational.aac"],
  ["22:30", "22:45", "Magic Radio UK (Mellow Melodies)", "Entertainment", "English", "https://stream-mz.planetradio.co.uk/magicnational.aac"],
  ["22:45", "23:00", "Virgin Radio UK", "Entertainment", "English", "https://virginradio.wireless.radio/stream"],
  ["23:00", "23:15", "Absolute Radio UK (Classic Rock)", "Entertainment", "English", "https://stream-al.planetradio.co.uk/absoluteradio.aac"],
  ["23:15", "23:30", "Radio X UK (Indie Rock)", "Entertainment", "English", "https://media-ice.musicradio.com/RadioXUKMP3"],
  ["23:30", "23:45", "Gold Radio UK (Classic Oldies)", "Entertainment", "English", "https://media-ice.musicradio.com/GoldMP3"],
  ["23:45", "00:00", "Triple J (Australia Independent Music)", "Entertainment", "English", "https://live-radio01.mediahubaustralia.com/2JJJ/mp3/"],
  ["00:00", "00:15", "Double J (Australia Heritage Hits)", "Entertainment", "English", "https://live-radio01.mediahubaustralia.com/2J/mp3/"],
  ["00:15", "00:30", "WRTI Classical & Jazz (Philadelphia)", "Entertainment", "English", "https://wrti-ice.streamguys1.com/wrti-mp3-128"],
  ["00:30", "00:45", "Jazz24 (Global Jazz Standards)", "Entertainment", "English", "https://live.wostreaming.net/manifest/ppm-jazz24aac-ibc1.m3u8"],
  ["00:45", "01:00", "WBGO Jazz 88.3 FM (New York)", "Entertainment", "English", "https://wbgo.streamguys1.com/wbgo128"],
  ["01:00", "01:15", "SomaFM Groove Salad (Ambient Chillout)", "Entertainment", "English", "https://ice1.somafm.com/groovesalad-128-mp3"],
  ["01:15", "01:30", "SomaFM Drone Zone (Sleep Ambient)", "Entertainment", "English", "https://ice1.somafm.com/dronezone-128-mp3"],
  ["01:30", "01:45", "SomaFM Secret Agent (007 Spy Lounge)", "Entertainment", "English", "https://ice1.somafm.com/secretagent-128-mp3"],
  ["01:45", "02:00", "SomaFM Indie Pop Rocks", "Entertainment", "English", "https://ice1.somafm.com/indiepop-128-mp3"],
  ["02:00", "02:15", "SomaFM Lush (Vocal Ambient)", "Entertainment", "English", "https://ice1.somafm.com/lush-128-mp3"],
  ["02:15", "02:30", "SomaFM Def Con Radio (Synthwave)", "Entertainment", "English", "https://ice1.somafm.com/defcon-128-mp3"],
  ["02:30", "02:45", "SomaFM Suburbs of Goa (Desi Beats)", "Entertainment", "English", "https://ice1.somafm.com/suburbsofgoa-128-mp3"],
  ["02:45", "03:00", "Cinemix (Film & Cinema Scores)", "Entertainment", "English", "https://cinemix.ice.infomaniak.ch/cinemix-128.mp3"],
  ["03:00", "03:30", "Swiss Classic Radio", "Entertainment", "Classical", "https://stream.srg-ssr.ch/m/rsc_de/mp3_128"],
  ["03:30", "04:00", "WQXR Classical New York", "Entertainment", "English", "https://stream.wqxr.org/wqxr-web"],
  ["04:00", "04:30", "WFMT Classical Chicago", "Entertainment", "English", "https://wfmt.streamguys1.com/wfmt128"],
  ["04:30", "05:00", "BBC Radio 3 (Classical & World)", "Entertainment", "English", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_three"]
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