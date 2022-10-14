function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarOption(produto) {
    console.log(produto)
    let option = document.createElement("option")
    option.setAttribute('value', `${produto.id}`);
    text = document.createTextNode(`ID: ${produto.id} NOME: ${produto.nome.toUpperCase()}`)
    option.appendChild(text)

    return option;

}

function main() {
    data = get("http://127.0.0.1:8080/produtos")
    produtos = JSON.parse(data)
    console.log(produtos)
    let select = document.getElementById("combo-produto")
    produtos.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}


function buscaId() {
    let select = document.getElementById("combo-produto")
    var idProduto = '';
    select.onchange = function () {
        idProduto = this.value;
        console.log(idProduto)
        
        

    }
    
 

}

main()
buscaId()



