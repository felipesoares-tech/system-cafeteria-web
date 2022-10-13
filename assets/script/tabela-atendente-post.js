
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

function cadastrarCliente(){
    event.preventDefault()
    let url = "http://127.0.0.1:8080/atendentes"
    let nome = document.getElementById("name").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("mail").value
    let telefone = document.getElementById("tel").value
    let dataNascimento = document.getElementById("date").value

    body = {
    "cpf":cpf,
    "nome":nome,
    "telefone":telefone,
    "email":email,
    "dataNascimento":dataNascimento
    }

    post(url,body)
}