const s = document.createElement("script");
s.src = chrome.runtime.getURL("src/injected.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
chrome.storage.local.clear();

window.addEventListener(
  "globalData",
  (event) => {
    const { name, data } = event.detail;
    chrome.storage.local.get('globalData', async (result) => {
      if (!chrome.runtime.lastError) {
        await chrome.storage.local.set({ 'globalData': { ...result.globalData, [name]: data } });
      }
    });
  },
  false
);


