function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarOption(produto){
    console.log(produto)
    op = document.createElement("option")
    item = document.createTextNode(`id: ${produto.id} nome: ${produto.nome}`)
    op.appendChild(item)

    return op;

}

function main(){
    data = get("http://127.0.0.1:8080/produtos")
    produtos = JSON.parse(data)
    console.log(produtos)
    let select = document.getElementById("combo-produto")
    produtos.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

main()