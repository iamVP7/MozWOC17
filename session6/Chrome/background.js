var actionID = '';

chrome.runtime.onMessage.addListener(doyoutubeaction);

function doyoutubeaction(message){

actionID = message.actionid;

var querying = browser.tabs.query({url: "*://*.youtube.com/*"});
querying.then(logTabs, onError);

}


// get all the tab url
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
	changeSong(tab.id);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function onExecuted(result) {
  console.log(`We executed in tab 2`);
}


// do the operation
function changeSong(tabid){

var codeToExecute = '';
codeToExecute = findCode(tabid);


var executing = browser.tabs.executeScript(
  		tabid,
  		{code: codeToExecute}
	);
executing.then(onExecuted, onError);

}


// Find the code executiong 
function findCode(tabid){

	if(actionID == 'nextsong'){
        	return 'document.querySelector(".ytp-next-button.ytp-button").click()'
	}else if(actionID == 'switchplay'){
        	return 'document.querySelector(".ytp-play-button.ytp-button").click()'
	}else if(actionID == 'replay'){
        	return 'document.querySelector(".ytp-prev-button.ytp-button").click()'
	}else if(actionID == 'lastsong'){
        	  browser.tabs.executeScript(
  				tabid,
  				{code: 'document.querySelector(".ytp-prev-button.ytp-button").click()'}
				);
	return 'document.querySelector(".ytp-prev-button.ytp-button").click()'
	}

}

