function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function marcarCheckBox(id,el) {
    let checkBox = document.getElementById(id)
    if (!checkBox.checked) {
        checkBox.checked = true
        el.setAttribute('style','background-color:#93a8ac;')
    }
    else {
        checkBox.checked = false
        el.removeAttribute('style')
    }
}

function criarLinha(produto, idCheck) {
    linha = document.createElement("tr")
    tdId = document.createElement("td")
    tdNome = document.createElement("td")
    tdQuantidade = document.createElement("td")
    tdValorUnitario = document.createElement("td")
    tdSubTotal = document.createElement("td")

    let quantidade = document.getElementById('qtd')
    let valorTotal = document.getElementById('vlr-final')

    if (quantidade.value < 1) {
        alert('Informe a quantidade!')
        return -1
    }

    tdId.innerHTML = produto.id
    tdNome.innerHTML = produto.nome
    tdQuantidade.innerHTML = quantidade.value
    tdValorUnitario.innerHTML = produto.valorUnitario
    tdSubTotal.innerHTML = valorTotal.value

    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdValorUnitario)
    linha.appendChild(tdSubTotal)
    linha.setAttribute("class", "row" + idCheck)
    return linha
}
var cont = 0;
function inserirItem() {

    let tabelaBody = document.getElementById("body-tabela")
    let select = document.getElementById('combo-produto')
    let id = select.value
    data = get(`http://127.0.0.1:8080/product/${id}`)
    let produto = JSON.parse(data)

    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.id = id + '-chk' + cont
    checkBox.setAttribute('style','display: none;')


    let linha = criarLinha(produto, checkBox.id)



    if (linha != -1) {
        linha.setAttribute('onclick', `marcarCheckBox('${checkBox.id}',this)`)
        tabelaBody.appendChild(checkBox)
        tabelaBody.appendChild(linha)
        cont += 1
    }

}

function removerItem() {
    $("input:checked").each(function () {
        console.log($(this).attr("id"));
        $(`[id=${$(this).attr("id")}]`).remove();
        $(`[class='row${$(this).attr("id")}']`).remove();
    });
}