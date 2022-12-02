
function post(url, body){
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))

    request.addEventListener("load", function() {
        if (request.status == 201) 
            alert('Produto cadastrado com sucesso!')
         else 
            alert(`${request.response.mensagem}`)
    });
    let form = document.getElementById("form-produtos")
    form.reset()
}

function cadastrarProduto(){
    event.preventDefault()
    let url = "http://127.0.0.1:8080/product"
    let descricao = document.getElementById("descricao").value
    let quantidade = document.getElementById("quantidade").value
    let valorUnitario = document.getElementById("valor").value
    valorUnitario.value = parseFloat(valorUnitario.value).toFixed(2)
    
    body = {
    "valorUnitario":valorUnitario,
    "quantidade":quantidade,
    "nome":descricao,
    }
    post(url,body)
}