let N = Number(prompt("Digite o valor de N: "));

let acum = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 == 0) {
    acum += i;
  }
}

alert(`A soma dos números pares de 1 até ${N} é: ${acum}`);