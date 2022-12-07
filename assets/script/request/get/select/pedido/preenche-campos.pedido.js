function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
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
    var select = document.getElementById("sel-produto")
    var inputVlrUnitario = document.getElementById("valor")
    var inputVlrTotal = document.getElementById("vlr-final")
    var inputQtd = document.getElementById('quantidade')
    
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

preenchePedido()