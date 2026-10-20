// Where the download button goes. Null until the app is out: the page says it is coming instead.
// TestFlight's public link while testing, the App Store link after launch.
const APP_URL = null;

function showDownload() {
  for (const el of document.querySelectorAll("[data-download]")) {
    if (APP_URL) {
      el.innerHTML = '<a class="button" href="' + APP_URL + '">Last ned Knips</a>';
    } else {
      el.innerHTML = '<div class="soon">Knips kommer snart til iPhone.</div>';
    }
  }
}

// The event code from a path like /e/HJ7K2Q or /e/hj7-k2q, or null.
// Same alphabet as the server: no I, O, 0 or 1.
function eventCode(path) {
  const match = path.match(/^\/e\/([^/]+)\/?$/i);
  if (!match) return null;
  const code = decodeURIComponent(match[1]).toUpperCase().replace(/[\s-]/g, "");
  return /^[A-HJ-NP-Z2-9]{6}$/.test(code) ? code : null;
}
