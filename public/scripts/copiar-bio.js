// Bloco próprio: scripts clássicos compartilham o escopo global da página.
{
  // Botões "Copiar" do kit de palestrante: copiam o texto do elemento indicado
  // em data-copiar e avisam o resultado na região aria-live do próprio botão.
  document.querySelectorAll('[data-copiar]').forEach((botao) => {
    const alvo = document.getElementById(botao.dataset.copiar);
    const rotulo = botao.querySelector('[data-rotulo]');
    if (!alvo || !rotulo) return;
    const original = rotulo.textContent;

    botao.addEventListener('click', async () => {
      let copiou = false;
      try {
        await navigator.clipboard.writeText(alvo.innerText.trim());
        copiou = true;
      } catch {
        // Plano B: seleciona o texto e usa o comando antigo de copiar. Se nem
        // isso funcionar, o texto fica selecionado para a pessoa copiar à mão.
        const selecao = window.getSelection();
        const intervalo = document.createRange();
        intervalo.selectNodeContents(alvo);
        selecao.removeAllRanges();
        selecao.addRange(intervalo);
        try { copiou = document.execCommand('copy'); } catch { copiou = false; }
      }
      rotulo.textContent = copiou ? 'Copiada' : 'Texto selecionado, é só copiar';
      setTimeout(() => { rotulo.textContent = original; }, 2500);
    });
  });
}
