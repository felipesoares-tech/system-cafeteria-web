function post(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))

    request.addEventListener("load", function() {
        if (request.status == 201) 
            alert('Atendente cadastrado com sucesso!')
         else{
            alert(`${request.response.mensagem}`)
         } 
            
    });
    let form = document.getElementById("form-produtos")
    form.reset()
}

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function cadastrarCliente(){
    event.preventDefault()
    let url = "http://127.0.0.1:8080/attendant"
    let nome = document.getElementById("name").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("mail").value
    let senha = document.getElementById('senha').value
    let telefone = document.getElementById("tel").value
    let dataNascimento = document.getElementById("date").value
    let selectCidade = document.getElementById('city')
    let cidadeId = selectCidade.options[selectCidade.selectedIndex].value
    
    let data = get(`http://127.0.0.1:8080/city/${cidadeId}`)
    let cidade = JSON.parse(data)
    
    const numTelefone = telefone.replace(/[^0-9]/g, '')
    const numCpf = cpf.replace(/[^0-9]/g, '')

    body = {
    "cpf":numCpf,
    "nome":nome,
    "telefone":numTelefone,
    "email":email,
    "senha":senha,
    "dataNascimento":dataNascimento,
    "cidade": cidade
    }

    post(url,body)
}