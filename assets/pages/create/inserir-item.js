function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(produto){
    linha = document.createElement("tr")
    tdId = document.createElement("td")
    tdNome = document.createElement("td")
    tdQuantidade = document.createElement("td")
    tdValorUnitario = document.createElement("td")
    tdSubTotal = document.createElement("td")

    tdId.innerHTML = produto.id
    tdNome.innerHTML = produto.nome
    tdQuantidade.innerHTML = document.getElementById('qtd').value
    tdValorUnitario.innerHTML = produto.valorUnitario
    tdSubTotal.innerHTML = document.getElementById('vlr-final').value

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
    let select = document.getElementById('combo-produto')
    let id = select.value
    data = get(`http://127.0.0.1:8080/produtos/${id}`)
    let produto = JSON.parse(data)

    let linha = criarLinha(produto)
    tabela.appendChild(linha)
    
}