chrome.runtime.onMessage.addListener(
  function (request) {
    const display = request?.data;
    toggleButton(display);
  }
);

const toggleButton = (display) => {
  // HTML
  const content = document.getElementById("content");
  const loader = document.getElementById("loader");
  if (display) {
    content.style.display = "block";
    loader.style.display = "none";
  } else {
    content.style.display = "none";
    loader.style.display = "block";
  }
};