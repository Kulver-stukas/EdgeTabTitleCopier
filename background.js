chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      navigator.clipboard.writeText(document.title);
      alert('Скопировано: ' + document.title);
    }
  });
});