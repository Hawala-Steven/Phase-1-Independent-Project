function getContent(fragmentId, callback){

  let pages = {
    home: "This is the Home page. Welcome to my site.",
    about: "This page will describe what my site is about",
    clients: "This shows the testimonials of our customers",
    contact: "Contact me on this page if you have any questions"
  };
  
  callback(pages[fragmentId]);
}
  
  
  
function loadContent(){
  let contentDiv = document.getElementById("app"),
    fragmentId = location.hash.substr(1);
  
    getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });
  
}
  
if(!location.hash) {
  location.hash = "#home";
}
  
loadContent();
  
window.addEventListener("hashchange", loadContent)

document.querySelector('#rating').addEventListener('click', function (e) {
  if (e.target.nodeName === 'SPAN') {
    var currentSibling = e.target;
    var nextSibling = e.target;
    currentSibling.classList.add('active');
    while ((currentSibling = currentSibling.previousElementSibling)) {
      currentSibling.classList.add('active');
    }
    while ((nextSibling = nextSibling.nextElementSibling)) {
      nextSibling.classList.remove('active');
    }
  }
});