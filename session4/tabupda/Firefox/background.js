browser.tabs.onCreated.addListener(handleCreated);


function handleCreated(tab) {
  console.log("the created tab id is "+tab.id);

var updating = browser.tabs.update({url: "https://developer.mozilla.org"});
updating.then(onUpdated, onError);
}


function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

