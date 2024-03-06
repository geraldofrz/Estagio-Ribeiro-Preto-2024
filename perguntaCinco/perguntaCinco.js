function inverterString() {
  const inputElement = document.getElementById("inputString");
  const resultElement = document.getElementById("resultado");

  if (inputElement.value.trim() === "") {
    alert("Por favor, informe uma string.");
    return;
  }

  const stringInvertida = invertString(inputElement.value);
  resultElement.textContent = "String invertida: " + stringInvertida;
}

function invertString(str) {
  const tamanho = str.length;
  let stringInvertida = '';

  for (let i = tamanho - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}
