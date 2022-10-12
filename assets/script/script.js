function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(usuario){

}

function main(){
    usuarios = get("http://127.0.0.1:8080/clientes")
    console.log(usuarios)
}