function put(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("PUT",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))

    request.addEventListener("load", function() {
        if (request.status == 200) 
            alert('Cliente atualizado com sucesso!')
         else{
            alert(`${request.response.mensagem}`)
         } 
            
    });
    let form = document.getElementById("form-produtos")
    form.reset()
}

function atualizarCliente(){
    event.preventDefault()
    let clientId = document.getElementById("sel-cliente").value
    let url =`http://127.0.0.1:8080/client/${clientId}`
    let nome = document.getElementById("name").value
    let cpf = document.getElementById("cpf").value
    let telefone = document.getElementById('tel').value
    let dataNasc = document.getElementById('date').value
    
    const numTelefone = telefone.replace(/[^0-9]/g, '')
    const numCpf = cpf.replace(/[^0-9]/g, '')

    body = {
    "cpf":numCpf,
    "nome":nome,
    "telefone":numTelefone,
    "dataNascimento":dataNasc
    }

    put(url,body)
}
