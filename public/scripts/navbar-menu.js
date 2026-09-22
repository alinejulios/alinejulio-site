const button = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

if (button && menu) {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', (!isExpanded).toString());
    menu.classList.toggle('hidden');
  });
}
