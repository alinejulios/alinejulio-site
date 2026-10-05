// Esconde o botão flutuante do WhatsApp quando o rodapé entra na tela, para
// que ele nunca cubra o copyright nem os links do rodapé.
const button = document.getElementById('whatsapp-button');
const footer = document.querySelector('footer');

if (button && footer && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const hide = entry.isIntersecting;
      button.classList.toggle('invisible', hide);
      button.classList.toggle('opacity-0', hide);
      button.toggleAttribute('aria-hidden', hide);
      if (hide) button.setAttribute('tabindex', '-1');
      else button.removeAttribute('tabindex');
    },
    { threshold: 0 }
  );
  observer.observe(footer);
}
