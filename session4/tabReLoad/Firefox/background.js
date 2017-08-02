browser.browserAction.onClicked.addListener(mylove);

function mylove(tab) {
  console.log(tab.url+"---------"+tab.id);

var reload = browser.tabs.reload(tab.id,{bypassCache: true});
reload.then(onLoaded, onError);

console.log("ReLoaded sucessfully");
}

function onLoaded() {
  console.log(`Loaded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

