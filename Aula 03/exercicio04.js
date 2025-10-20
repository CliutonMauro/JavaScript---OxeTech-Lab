let x = Number(prompt("Digite o primeiro número: "));
let y = Number(prompt("Digite o segundo número: "));

alert(`--- Operações ---
1 - soma 
2 - subtração 
3 - multiplicação
4 - divisão
-----------------`);

opcao = Number(prompt("Escolha uma operação: "))
switch (opcao) {
  case 1:
    alert(`Resultado da soma: ${x + y}`);
    break;
  case 2:
    alert(`Resultado da subtração: ${x - y}`);
    break;
  case 3: 
    alert(`Resultado da multiplicação: ${x * y}`);
    break;
  case 4:
    alert(`Resultado da divisão: ${x / y}`)
}