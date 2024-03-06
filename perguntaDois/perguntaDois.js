function verificarFibonacci() {
  const numeroInput = document.getElementById('numeroInput');
  const numero = numeroInput.value ? parseInt(numeroInput.value) : 0;

  function numSquared(n) {
    const raizQuadrada = Math.sqrt(n);
    return raizQuadrada === Math.floor(raizQuadrada);
  }

  function isFibonacci(num) {
    return numSquared(5 * num * num + 4) || numSquared(5 * num * num - 4);
  }

  const resultElement = document.getElementById('resultado');
  if (isFibonacci(numero)) {
    resultElement.textContent = `${numero} pertence à sequência de Fibonacci.`;
  } else {
    resultElement.textContent = `${numero} não pertence à sequência de Fibonacci.`;
  }
}

const botaoVerificar = document.getElementById('botaoVerificar');
if (botaoVerificar) {
  botaoVerificar.addEventListener('click', verificarFibonacci);
}
