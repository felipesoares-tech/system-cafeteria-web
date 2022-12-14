
function post(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))

    request.addEventListener("load", function() {
        if (request.status == 201) 
            alert('Cliente cadastrado com sucesso!')
         else{
            alert(`${request.response.mensagem}`)
         } 
            
    });
    let form = document.getElementById("form-produtos")
    form.reset()
}

function cadastrarCliente(){
    event.preventDefault()
    let url = "http://127.0.0.1:8080/client"
    let nome = document.getElementById("name").value
    let cpf = document.getElementById("cpf").value
    let telefone = document.getElementById("tel").value
    let dataNascimento = document.getElementById("date").value
    
    const numTelefone = telefone.replace(/[^0-9]/g, '')
    const numCpf = cpf.replace(/[^0-9]/g, '')

    body = {
    "cpf":numCpf,
    "nome":nome,
    "telefone":numTelefone,
    "dataNascimento":dataNascimento
    }

    post(url,body)
}
