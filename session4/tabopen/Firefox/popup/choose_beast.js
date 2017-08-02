
/*
Listen for clicks in the popup.

If the click is not on one of the beasts, return early.

Otherwise, the text content of the node is the name of the beast we want.

Inject the "beastify.js" content script in the active tab.

Then get the active tab and send "beastify.js" a message
containing the URL to the chosen beast's image.
*/
document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("beast")) {
    return;
  }

  var name = e.target.textContent;

	 chrome.runtime.sendMessage({"name": name});
});



