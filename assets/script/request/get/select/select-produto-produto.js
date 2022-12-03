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

function buscaProduto(id) {
    data = get(`http://127.0.0.1:8080/product/${id}`)
    let produto = JSON.parse(data)
    return produto
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


function preencheCampos() {
    var select = document.getElementById("sel-produto")
    var inputDesc = document.getElementById("descricao")
    var inputQtd = document.getElementById("quantidade")
    var inputVlr = document.getElementById('valor')

    var idProduto = select.value
    var produto = buscaProduto(idProduto)

    /*Preenchendo os inputs*/
    inputDesc.value = produto.nome
    inputQtd.value = produto.quantidade
    inputVlr.value = produto.valorUnitario

    select.onchange = function () { /*Funções a executar quando o select sofrer alguma alteração */
        let idProduto = this.value;

        /*Buscando valor unitário e quantidade do produto quando o select é alterado */
        let produto = buscaProduto(idProduto)


        /*Preenchendo os inputs*/
        inputDesc.value = produto.nome
        inputQtd.value = produto.quantidade
        inputVlr.value = produto.valorUnitario

    }
}
preencheProduto()
preencheCampos()