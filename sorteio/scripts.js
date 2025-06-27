    function sortear() {
  console.log("Função sortear foi chamada");

  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  console.log("min:", min, "max:", max);

  const resultado = document.getElementById('resultado');

  if (isNaN(min) || isNaN(max) || min > max) {
    resultado.innerText = "Digite valores válidos!";
    return;
  }

  const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  resultado.innerText = `Número sorteado: ${sorteado}`;
}
