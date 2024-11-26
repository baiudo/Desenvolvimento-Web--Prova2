(function() {
  // Função 1: Captura todas as cores e cria uma lista
  function getAllColors() {
    const colorSpans = document.querySelectorAll('span.colornamespan');
    return Array.from(colorSpans).map(span => span.textContent.trim().toLowerCase());
  }

  // Função 2: Seleciona 10 cores aleatórias da lista original
  function selectRandomColors(colors) {
    // Embaralha a lista de cores
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]]; // Troca os elementos
    }

    // Retorna as 10 primeiras cores da lista embaralhada
    return colors.slice(0, 10);
  }

  // Função 3: Escolhe uma cor aleatória entre as 10 selecionadas
  function chooseFinalColor(selectedColors) {
    return selectedColors[Math.floor(Math.random() * selectedColors.length)];
  }

  // Chama as funções para obter as cores e fazer a seleção
  const allColors = getAllColors();
  console.log('Cores capturadas:', allColors);

  const randomColors = selectRandomColors(allColors);
  console.log('10 Cores Selecionadas Aleatoriamente:');
  randomColors.forEach((color, index) => {
    console.log(`${index + 1}. ${color}`);
  });

  const finalColor = chooseFinalColor(randomColors);
  console.log('\nCor Final Selecionada:');
  console.log(finalColor); // Exibe apenas o nome da cor final
})();
