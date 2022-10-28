function criarLinha(){
    linha = document.createElement("tr")
    tdId = document.createElement("td")
    tdNome = document.createElement("td")
    tdQuantidade = document.createElement("td")
    tdValorUnitario = document.createElement("td")
    tdSubTotal = document.createElement("td")

    let select = document.getElementById('combo-produto')
    let option = select.children[select.selectedIndex]


    let nomeProduto = option.textContent
    let quantidadeProduto = document.getElementById('qtd')
    let valorUnitarioProduto = document.getElementById('vlr-unitario')
    let subTotal = document.getElementById('vlr-final')

    console.log(select.value)
    console.log(nomeProduto)
    console.log(quantidadeProduto.value)
    console.log(valorUnitarioProduto.value)
    console.log(subTotal.value)

    tdId.innerHTML = select.value
    tdNome.innerHTML = nomeProduto
    tdQuantidade.innerHTML = quantidadeProduto.value
    tdValorUnitario.innerHTML = valorUnitarioProduto.value
    tdSubTotal.innerHTML = subTotal.value

    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdValorUnitario)
    linha.appendChild(tdSubTotal)
    
    linha.setAttribute("class", "row")

    return linha;

}

function inserirItem(){
    let tabela = document.getElementById("tabela-item")
    let linha = criarLinha()
    tabela.appendChild(linha)
    
}