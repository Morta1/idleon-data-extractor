let isRunning = false;
let finalResult = {};

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (newValue) {
      finalResult = { ...finalResult, [key]: newValue };
    }
    if (Object.keys(finalResult).length === 2) {
      parseData(finalResult);
    }
  }
});
const parseData = (data) => {
  if (!isRunning) {
    console.log("Data: ", data);
    isRunning = true;
    const fields = data.documentChange?.document?.fields;
  }
  isRunning = false;
};
