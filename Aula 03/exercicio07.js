let numPositivo = 0;
let numNegativo = 0;

while (true) {
  let numero = Number(prompt())

  if (numero == 0) {
    break;
  }

  if (numero < 0) {
    numNegativo += 1;
  } else if (numero > 0) {
    numPositivo += 1;
  }
}

alert(`Quantidade de números positivos: ${numPositivo}
Quantidade de números negativos: ${numNegativo}`)