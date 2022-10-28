function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function buscaEstados(){
    data = get('http://127.0.0.1:8080/estados/')
    let estados = JSON.parse(data)
    return estados
}

function criarOption(estado) {
    let option = document.createElement("option")

    option.setAttribute('value', `${estado.id}`);
    text = document.createTextNode(`${estado.nome.toUpperCase()}`)
    option.appendChild(text)

    return option;
}

function preencheEstado() {
    var select = document.getElementById("state")
    let estados = buscaEstados()

    estados.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

preencheEstado()