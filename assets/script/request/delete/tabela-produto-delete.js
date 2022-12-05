function del(url){
    let request = new XMLHttpRequest()
    request.open("DELETE",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send()

    request.addEventListener("load", function() {
        if (request.status == 204){
            alert('Produto removido com sucesso!')
            location.reload()
        } 
         else{
            alert(`${request.response.mensagem}`)
         } 
            
    });
    let form = document.getElementById("form-produto")
    form.reset()
}

function deletarProduto(){
    event.preventDefault()
    let produtoId = document.getElementById("sel-produto").value
    let url =`http://127.0.0.1:8080/product/${produtoId}`
   
    del(url)
}
