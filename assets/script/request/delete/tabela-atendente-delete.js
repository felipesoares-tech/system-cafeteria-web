function del(url){
    let request = new XMLHttpRequest()
    request.open("DELETE",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send()

    request.addEventListener("load", function() {
        if (request.status == 204){
            alert('Atendente removido com sucesso!')
            location.reload()
        } 
         else{
            alert(`${request.response.mensagem}`)
         } 
            
    });
    let form = document.getElementById("form-atendente")
    form.reset()
}

function deletarAtendente(){
    event.preventDefault()
    let atendenteId = document.getElementById("sel-atendente").value
    let url =`http://127.0.0.1:8080/attendant/${atendenteId}`
   
    del(url)
}
