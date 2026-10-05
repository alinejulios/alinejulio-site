// Bloco próprio: scripts clássicos compartilham o escopo global da página.
{
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (button && menu) {
    const iconOpen = button.querySelector('[data-icon="open"]');
    const iconClose = button.querySelector('[data-icon="close"]');

    const setOpen = (open) => {
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      menu.classList.toggle('hidden', !open);
      iconOpen?.classList.toggle('hidden', open);
      iconClose?.classList.toggle('hidden', !open);
    };

    button.addEventListener('click', () => {
      setOpen(button.getAttribute('aria-expanded') !== 'true');
    });

    // Esc fecha o menu e devolve o foco ao botão
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        button.focus();
      }
    });
  }
}
