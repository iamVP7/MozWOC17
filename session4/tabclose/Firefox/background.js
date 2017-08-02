browser.browserAction.onClicked.addListener(mylove);

function mylove(tab) {
  console.log(tab.url+"---------"+tab.id);

var removing = browser.tabs.remove(tab.id);
removing.then(onRemoved, onError);

console.log("closed sucessfully");
}

function onRemoved() {
  console.log(`Removed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

