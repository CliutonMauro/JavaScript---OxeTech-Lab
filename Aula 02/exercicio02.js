let valorCompra = prompt("Informe o valor da compra: ");
let valorFinal = valorCompra - (valorCompra * 0.10);
let desconto = valorCompra - valorFinal;

alert(`O valor original: R$${valorCompra}
Desconto aplicado: ${desconto}
valor final: R$${valorFinal}`);