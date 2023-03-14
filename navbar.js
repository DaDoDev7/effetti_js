// barra navigazione che cambia allo scroll

var halfWindow = window.innerHeight / 10;

var lastScroll = 0;
var headerNav = document.querySelector("nav");

window.addEventListener("scroll", function(){
  var scrolled = window.scrollY;
  if(scrolled >= halfWindow) {
    headerNav.classList.add('active');
   
  } else {
    headerNav.classList.remove('active');
  }
  lastScroll = scrolled;
});

//Evento di scroll sulla finestra che considera come variabili scrollable e scrolled

window.addEventListener('scroll', () => {

// scrolled è il punto sul quale siamo con lo scroll attuale sulla finestra , e varia allo scroll
  
  var scrolled = window.scrollY;

  // scrollable è l'ammontare totale dello spazio scrollabile del documento . praticamente è il punto massimo di scrollY.
  
  var scrollable = document.documentElement.scrollHeight - window.innerHeight;
  
  //mettere  condizioni qui :D
  
  )}

// Come assegnare la classe di un oggetto (in questo caso una sottolineatura) a un .nav-link con lo stesso indirizzo della pagina

//CSS
                        
.nav-link[aria-current="page"] {
  text-decoration: underline wavy #f8c348 0.15rem;
  text-underline-offset: 0.5rem;
}

//javascript

document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})
