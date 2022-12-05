function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function buscaProdutos() {
    data = get('http://127.0.0.1:8080/product/')
    let produtos = JSON.parse(data)
    return produtos
}

function criarOption(produto) {
    let option = document.createElement("option")

    option.setAttribute('value', `${produto.id}`);
    text = document.createTextNode(`${produto.nome}`)
    option.appendChild(text)

    return option;
}



function preencheProduto() {
    var select = document.getElementById("sel-produto")
    let produtos = buscaProdutos()

    produtos.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

preencheProduto()