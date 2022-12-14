function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function buscaClientes(){
    data = get('http://127.0.0.1:8080/client/')
    let clients = JSON.parse(data)
    return clients
}

function criarOption(client) {
    let option = document.createElement("option")

    option.setAttribute('value', `${client.id}`);
    text = document.createTextNode(`${client.nome}`)
    option.appendChild(text)

    return option;
}

function preencheClient() {
    var select = document.getElementById("sel-cliente")
    let clients = buscaClientes()

    clients.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

preencheClient()