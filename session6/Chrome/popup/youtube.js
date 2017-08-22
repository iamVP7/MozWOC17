

document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("beast")) {
    return;
  }

  var name = e.target.textContent;


         chrome.runtime.sendMessage({"actionid": e.target.id});
});

