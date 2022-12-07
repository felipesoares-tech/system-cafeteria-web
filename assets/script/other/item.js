var listItem = [] //variável para armazenar os os itens criados!

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

var sumAux = 0;

function marcarCheckBox(id, el, vlr) { // function responsável por "selecionar" os itens quando clicados
    let checkBox = document.getElementById(id)
    if (!checkBox.checked) {
        checkBox.checked = true
        el.setAttribute('style', 'background-color:#93a8ac;')
        sumAux = sumAux + parseFloat(vlr);
    }
    else {
        checkBox.checked = false
        el.removeAttribute('style')
        sumAux = sumAux - parseFloat(vlr);
    }
}

function criarLinha(produto, idCheck) { //function responsável por criar a linha da tabela de itens
    linha = document.createElement("tr")
    tdId = document.createElement("td")
    tdNome = document.createElement("td")
    tdQuantidade = document.createElement("td")
    tdValorUnitario = document.createElement("td")
    tdSubTotal = document.createElement("td")

    let quantidade = document.getElementById('quantidade')
    let valorTotal = document.getElementById('vlr-final')

    if (quantidade.value < 1) { //Verifica se o usuário informou a quantidade do produto informado.
        alert('Informe a quantidade!')
        return -1
    }

    tdId.innerHTML = produto.id
    tdNome.innerHTML = produto.nome
    tdQuantidade.innerHTML = quantidade.value
    tdValorUnitario.innerHTML = produto.valorUnitario
    tdSubTotal.innerHTML = valorTotal.value

    listItem.push( //Inserção de item na lista de itens
        {
            qtd: quantidade.value,
            product: produto,
            vlrTotal: valorTotal.value,
            order: null //Visto que o pedido ainda não foi finalizado, então não será possível atribuir um pedido.
        }
    )

    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdValorUnitario)
    linha.appendChild(tdSubTotal)
    linha.setAttribute("class", "row" + idCheck)
    return linha
}
var cont = 0;
var soma = 0;

function inserirItem() { // Function responsável pela criação de itens

    let tabelaBody = document.getElementById("body-tabela")
    let select = document.getElementById('sel-produto') // Seleciona o select que possui todos os produtos da lanchonete
    let id = select.value // recupera o id do produto selecionado
    let data = get(`http://127.0.0.1:8080/product/${id}`)
    let produto = JSON.parse(data) // recupera o produto selecionado

    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.id = id + '-chk' + cont
    checkBox.setAttribute('style', 'display: none;')

    let valorTotal = document.getElementById('vlr-final')
    let linha = criarLinha(produto, checkBox.id)

    if (linha != -1) { // se a linha foi criada com sucesso, então será adicionada na tabela
        linha.setAttribute('onclick', `marcarCheckBox('${checkBox.id}',this,'${valorTotal.value}')`)
        tabelaBody.appendChild(checkBox)
        tabelaBody.appendChild(linha)
        cont += 1
        let subTotal = document.getElementById('vlr-final')
        soma = soma + parseFloat(subTotal.value);

        let vlrTotal = document.getElementById('vlr-total')
        vlrTotal.innerHTML = soma;
    }

    console.log(listItem)
}

function removerItem() {
    if(listItem.length > 0){ // condição para remover somente se possuir itens na lista!
        $("input:checked").each(function () { //Utilizando JQUERY para pegar todos o inputs que estão selecionados
            let row = document.getElementById($(this).attr("id")).nextSibling //Selecionando o elemento "tr" do html para acessar os dados do item que está selecionado
      
            const index = listItem.map(e => e.product.nome).indexOf(row.cells[1].innerHTML) //utilizando da função de map para buscar a posição que se encontrar o elemento clicado a partir de seu nome
            if (index > -1) { // se o index é diferente de -1, então foi possível encontrar o item
                listItem.splice(index, 1) // segundo parâmetro, significa remover 1 item apenas
              }
    
            $(`[id=${$(this).attr("id")}]`).remove() //remove o input
            $(`[class='row${$(this).attr("id")}']`).remove() // remove a linha
        })
    
        let vlrTotal = document.getElementById('vlr-total')
        soma = soma - sumAux
        vlrTotal.innerHTML = soma
        sumAux = 0
    }else
        alert('Não há itens a serem removidos!')
}