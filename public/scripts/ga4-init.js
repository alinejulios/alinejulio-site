window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-WD92JJ901K');

// Carrega o gtag.js (~157KB) só depois do "load", pra não competir com o
// carregamento crítico da página (CSS, fontes) nem atrasar o LCP.
function loadGtagScript() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WD92JJ901K';
  document.head.appendChild(script);
}

if (document.readyState === 'complete') {
  loadGtagScript();
} else {
  window.addEventListener('load', loadGtagScript);
}
