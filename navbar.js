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


// elementi della navbar che cambiano allo scroll . una sorta di breadcrumb per evidenziare i navlinks di una navbar.

window.addEventListener('scroll', function() {
  var cardItems = document.querySelectorAll('.card');
  var navLinks = document.querySelectorAll('.navlinks');
  var currentCardIndex = 0;
  
  // determina l'indice dell'ultima carta visibile
  for (var i = 0; i < cardItems.length; i++) {
    var bounding = cardItems[i].getBoundingClientRect();
    if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
      currentCardIndex = i;
    }
  }
  
  // rimuovi la classe 'darken' da tutte le navlinks
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('darken');
  }
  
  // aggiungi la classe 'darken' all'elemento di navigazione corrispondente all'ultima carta visibile
  navLinks[currentCardIndex].classList.add('darken');
});
