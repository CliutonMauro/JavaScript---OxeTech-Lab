let valorInicial = Number(prompt("Valor inicial: "));
let valorFinal = Number(prompt("Valor final: "));

let numeros = [];

for (let i = valorInicial; i <= valorFinal; i++) {
  numeros.push(i);
}

alert(numeros.join(" "));