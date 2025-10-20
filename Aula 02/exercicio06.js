let nome = prompt("Nome: ");
let peso = prompt("Peso: ");
let altura = prompt("Altura: ");
let confirmacao = confirm("Deseja continuar?");

if (confirmacao) {
  let imc = peso / (altura * altura);
  alert(`${nome}, seu IMC é: ${imc.toFixed(2)}`);
}
else {
  alert("Você saiu do programa.");
}
