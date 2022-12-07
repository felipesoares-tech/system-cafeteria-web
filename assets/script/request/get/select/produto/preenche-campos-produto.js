function buscaProduto(id) {
    data = get(`http://127.0.0.1:8080/product/${id}`)
    let produto = JSON.parse(data)
    return produto
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

preencheCampos()