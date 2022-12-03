function put(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("PUT",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))

    request.addEventListener("load", function() {
        if (request.status == 200) 
            alert('Produto atualizado com sucesso!')
         else{
            alert(`${request.response.mensagem}`)
         } 
            
    });
    let form = document.getElementById("form-produtos")
    form.reset()
}

function atualizarProduto(){
    event.preventDefault()
    let produtoId = document.getElementById("sel-produto").value
    let url =`http://127.0.0.1:8080/product/${produtoId}`
    let nome = document.getElementById("descricao").value
    let quantidade = document.getElementById("quantidade").value
    let valorUnitario = document.getElementById('valor').value
    
    body = {
    "nome":nome,
    "quantidade":quantidade,
    "valorUnitario":valorUnitario
    }

    put(url,body)
}
