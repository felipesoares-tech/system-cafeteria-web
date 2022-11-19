function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarOption(produto) {
    console.log(produto)
    let option = document.createElement("option")

    option.setAttribute('value', `${produto.id}`);
    option.setAttribute('id', `${produto.id}`)
    text = document.createTextNode(`${produto.nome.toUpperCase()}`)
    option.appendChild(text)

    return option;
}

function main() {
    data = get("http://127.0.0.1:8080/product")
    product = JSON.parse(data)
    let select = document.getElementById("combo-produto")
    product.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

function buscaPreco(id){
    data = get(`http://127.0.0.1:8080/product/${id}`)
    let produto = JSON.parse(data)
    return produto.valorUnitario
}
function buscaQtd(id){
    data = get(`http://127.0.0.1:8080/product/${id}`)
    let produto = JSON.parse(data)
    return produto.quantidade
}

function preenchePedido() {
    var select = document.getElementById("combo-produto")
    var inputVlrUnitario = document.getElementById("vlr-unitario")
    var inputVlrTotal = document.getElementById("vlr-final")
    var inputQtd = document.getElementById('qtd')
    
    var idProduto = select.value;
    var vlrUnitario = buscaPreco(idProduto)
    var qtd = buscaQtd(idProduto)

        inputQtd.onchange = function (){
            inputVlrTotal.value = (vlrUnitario* inputQtd.value)
    }

    /*Preenchendo os inputs*/ 
    inputVlrUnitario.value = vlrUnitario

    select.onchange = function () { /*Funções a executar quando o select sofrer alguma alteração */
        idProduto = this.value;

        /*Buscando valor unitário e quantidade do produto quando o select é alterado */
        vlrUnitario = buscaPreco(idProduto)
        qtd = buscaQtd(idProduto)

        /*Preenchendo os inputs*/ 
        inputVlrUnitario.value = vlrUnitario
        inputVlrTotal.value = (vlrUnitario* inputQtd.value)
        
        }
}

main()
preenchePedido()

