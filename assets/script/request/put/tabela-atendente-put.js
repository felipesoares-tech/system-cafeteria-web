function put(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("PUT",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))

    request.addEventListener("load", function() {
        if (request.status == 200) 
            alert('Atendente atualizado com sucesso!')
         else{
            alert(`${request.response.mensagem}`)
         } 
            
    });
    let form = document.getElementById("form-atendente")
    form.reset()
}

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function atualizarAtendente(){
    event.preventDefault()
    let atendenteId = document.getElementById("sel-atendente").value
    let url =`http://127.0.0.1:8080/attendant/${atendenteId}`
    let nome = document.getElementById("name").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("mail").value
    let senha = document.getElementById("senha").value
    let telefone = document.getElementById('tel').value
    let dataNasc = document.getElementById('date').value
    let cidadeId = document.getElementById('city').value
    let data = get(`http://127.0.0.1:8080/city/${cidadeId}`)
    let cidade = JSON.parse(data)
    
    const numTelefone = telefone.replace(/[^0-9]/g, '')
    const numCpf = cpf.replace(/[^0-9]/g, '')

    body = {
    "cpf":numCpf,
    "nome":nome,
    "telefone":numTelefone,
    "dataNascimento":dataNasc,
    "email": email,
    "cidade": cidade,
    "senha": senha
    }

    put(url,body)
}
