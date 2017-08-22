

document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("beast")) {
    return;
  }

  var name = e.target.textContent;


         browser.runtime.sendMessage({"actionid": e.target.id});
});

