// Bloco próprio: scripts clássicos compartilham o escopo global da página.
{
  // Esconde o botão flutuante do WhatsApp quando o rodapé entra na tela, para
  // que ele nunca cubra o copyright nem os links do rodapé.
  const button = document.getElementById('whatsapp-button');
  const footer = document.querySelector('footer');

  if (button && footer && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const hide = entry.isIntersecting;
        // Estilo direto (e não classes do Tailwind, que não lê a pasta public/)
        button.style.visibility = hide ? 'hidden' : '';
        button.style.opacity = hide ? '0' : '';
        button.toggleAttribute('aria-hidden', hide);
        if (hide) button.setAttribute('tabindex', '-1');
        else button.removeAttribute('tabindex');
      },
      { threshold: 0 }
    );
    observer.observe(footer);
  }
}
