function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(order){
    console.log(order)
    linha = document.createElement("tr")
    tdCliente = document.createElement("td")
    tdAtendente = document.createElement("td")
    tdId = document.createElement("td")
   
    order.client != null ? tdCliente.innerHTML = order.client.nome : tdCliente.innerHTML = 'Não Informado'
    tdAtendente.innerHTML = order.attendant.nome
    tdId.innerHTML = order.id
   

    linha.appendChild(tdId)
    linha.appendChild(tdAtendente)
    linha.appendChild(tdCliente)

    linha.setAttribute("class", "row")

    return linha;

}

function main(){
    data = get("http://127.0.0.1:8080/order")
    orders = JSON.parse(data)

    let tabela = document.getElementById("tabela")
    orders.forEach(element => {
        let linha = criarLinha(element)
        tabela.appendChild(linha)
    })
}

main()