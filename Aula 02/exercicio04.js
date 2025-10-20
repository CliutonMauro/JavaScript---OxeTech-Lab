let estoqueAtual = prompt("Estoque: ")
let remover = prompt("Remover: ")

if (remover > estoqueAtual) {
  alert("Operação inválida: quantidade insuficiente em estoque.")
}
else {
  let estoqueFinal = estoqueAtual - remover
  alert(`Estoque atualizado: ${estoqueFinal}`)
}