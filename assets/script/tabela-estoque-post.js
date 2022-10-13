
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

function cadastrarEstoque(){
    event.preventDefault()
    let url = "http://127.0.0.1:8080/produtos"
    let descricao = document.getElementById("descricao").value
    let quantidade = document.getElementById("quantidade").value
    let valorUnitario = document.getElementById("valor").value
    console.log(descricao)
    console.log(quantidade)

    body = {
    "valor_unitario":valorUnitario,
    "quantidade":quantidade,
    "nome":descricao,
    }

    post(url,body)
}