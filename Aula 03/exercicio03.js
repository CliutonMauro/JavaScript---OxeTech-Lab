let peso = Number(prompt("Peso (kg): "));
let altura = Number(prompt("Altura (m): "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
  alert(`Seu IMC é: ${imc.toFixed(2)} 
Abaixo do peso`);
} else if (imc >= 18.5 && imc <= 24.0) {
  alert(`Seu IMC é: ${imc.toFixed(2)} 
Peso normal`);
} else if (imc >= 25.0 && imc <= 29.9) {
  alert(`Seu IMC é: ${imc.toFixed(2)} 
Sobrepeso`);
} else if (imc >= 30.0 && imc <= 34.9) {
  alert(`Seu IMC é: ${imc.toFixed(2)} 
Obesidade grau 1`);
} else if (imc >= 35.0 && imc <= 39.9) {
  alert(`Seu IMC é: ${imc.toFixed(2)} 
Obesidade grau 2`);
} else {
  alert(`Seu IMC é: ${imc.toFixed(2)} 
Obesidade grau 3`);
}