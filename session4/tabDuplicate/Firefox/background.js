browser.browserAction.onClicked.addListener(mylove);

function mylove(tab) {
  console.log(tab.url+"---------"+tab.id);

var querying = browser.tabs.query({}); // get all the opened tabs
querying.then(tabsGotSuccess, onError);
}

function tabsGotSuccess(allTabs) {
console.log('we got many tabs');  

if (allTabs.length > 0) {
	for(var tabsArrayInd = 0; tabsArrayInd < allTabs.length; ++tabsArrayInd){
			var duplicating = browser.tabs.duplicate(allTabs[tabsArrayInd].id);
			    duplicating.then(onDuplicated, onError);
		}
	}
}

function onDuplicated(tabInfo) {
  console.log(tabInfo.url);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

