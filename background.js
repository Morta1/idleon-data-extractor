try {
  chrome.storage.local.clear();
  let activeTabId;

  chrome.tabs.onActivated.addListener(function (activeInfo) {
    activeTabId = activeInfo.tabId;
  });

  chrome.webNavigation.onBeforeNavigate.addListener(() => {
    chrome.runtime.sendMessage({ data: false })
  });

  chrome.tabs.onUpdated.addListener(() => {
    chrome.runtime.sendMessage({ data: false })
  })

  chrome.storage.onChanged.addListener(function (changes) {
    for (let [key, { newValue }] of Object.entries(changes)) {
      // Run when all of the data is set.
      if (!newValue) return;
      (async () => {
        await sendToWebpage(newValue);
      })();
      chrome.runtime.sendMessage({ data: newValue });
    }
  });

  const sendToWebpage = async (characterData) => {
    console.log('Save to web page');
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (!tab) {
      tab = await chrome.tabs.get(activeTabId);
    }
    // const manifest = chrome.runtime.getManifest();
    chrome.scripting.executeScript({
      target: { tabId: tab?.id },
      func: (characterData) => localStorage.setItem('globalData', JSON.stringify({
        ...characterData
      })),
      args: [characterData]
    }, () => { console.log('Done!') });
  }
} catch (err) {
  console.log('Error occurred in background script', err);
}