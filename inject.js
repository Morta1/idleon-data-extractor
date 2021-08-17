const s = document.createElement("script");
s.src = chrome.runtime.getURL("injected.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

window.addEventListener(
  "data",
  (event) => {
    const data = event.detail;
    chrome.storage.local.set({ saveData: data }, () => {
      if (chrome.runtime.lastError) {
        console.log("Error occured on saveData", chrome.runtime.lastError);
      } else {
        console.log("setting saveData");
      }
    });
  },
  false
);

window.addEventListener(
  "charNames",
  (event) => {
    const data = event.detail;
    chrome.storage.local.set({ charNames: data }, () => {
      if (chrome.runtime.lastError) {
        console.log("Error occured on charNames", chrome.runtime.lastError);
      } else {
        console.log("setting charNames");
      }
    });
  },
  false
);

window.addEventListener(
  "guildInfo",
  (event) => {
    const data = event.detail;
    chrome.storage.local.set({ guildInfo: data }, () => {
      if (chrome.runtime.lastError) {
        console.log("Error occured on guildInfo", chrome.runtime.lastError);
      } else {
        console.log("setting guildInfo");
      }
    });
  },
  false
);
