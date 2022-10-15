
function post(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(body))

    request.onload = function (){
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarProduto(){
    event.preventDefault()
    let url = "http://127.0.0.1:8080/produtos"
    let descricao = document.getElementById("descricao").value
    let quantidade = document.getElementById("quantidade").value
    let valorUnitario = document.getElementById("valor").value
    valorUnitario.value = parseFloat(valorUnitario.value).toFixed(2)
    console.log(valorUnitario)

    body = {
    "valorUnitario":valorUnitario,
    "quantidade":quantidade,
    "nome":descricao,
    }

    post(url,body)
}