function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(produto){
    console.log(produto)
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdId = document.createElement("td")
    tdQuantidade = document.createElement("td")
    tdValorUnitario = document.createElement("td")

    tdId.innerHTML = produto.id
    tdNome.innerHTML = produto.nome
    tdQuantidade.innerHTML = produto.quantidade
    tdValorUnitario.innerHTML = produto.valorUnitario

    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdValorUnitario)
    
    linha.setAttribute("class", "row")

    return linha;

}

function main(){
    data = get("http://127.0.0.1:8080/produtos")
    produtos = JSON.parse(data)

    let tabela = document.getElementById("tabela")
    produtos.forEach(element => {
        let linha = criarLinha(element)
        tabela.appendChild(linha)
    })
}

main()