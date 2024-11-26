(function() {
  // Captura todos os elementos <span> com a classe 'colornamespan', onde os nomes das cores estão localizados
  const colorSpans = document.querySelectorAll('span.colornamespan');

  // Cria uma lista com os nomes das cores
  const colors = Array.from(colorSpans).map(span => span.textContent.trim().toLowerCase());

  // Exibe a lista de cores capturadas (para verificação)
  console.log('Cores capturadas:', colors);

  // Embaralha a lista de cores
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]]; // Troca os elementos
  }

  // Seleciona as 10 primeiras cores da lista embaralhada
  const selectedColors = colors.slice(0, 10);

  // Exibe as 10 cores selecionadas aleatoriamente
  console.log('10 Cores Selecionadas Aleatoriamente:');
  selectedColors.forEach((color, index) => {
    console.log(`${index + 1}. ${color}`);
  });

  // Escolhe uma cor aleatória entre as 10 selecionadas
  const finalColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];

  // Exibe a cor final escolhida
  console.log('\nCor Final Selecionada:');
  console.log(finalColor); // Exibe apenas o nome da cor final
})();
