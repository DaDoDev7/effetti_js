// barra navigazione che cambia allo scroll

var halfWindow = window.innerHeight / 10;

var lastScroll = 0;
var headerNav = document.querySelector("nav");

window.addEventListener("scroll", function(){
  var scrolled = window.scrollY;
  if(scrolled >= halfWindow) {
    headerNav.classList.add('active');
    // console.log("coucuo");
  } else {
    headerNav.classList.remove('active');
  }
  lastScroll = scrolled;
});
