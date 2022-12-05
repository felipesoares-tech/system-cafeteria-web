function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function buscaAtendentes(){
    data = get('http://127.0.0.1:8080/attendant/')
    let atendentes = JSON.parse(data)
    return atendentes
}

function criarOption(atendente) {
    let option = document.createElement("option")

    option.setAttribute('value', `${atendente.id}`);
    text = document.createTextNode(`${atendente.nome}`)
    option.appendChild(text)

    return option;
}

function preencheAtendente() {
    var select = document.getElementById("sel-atendente")
    let atendentes = buscaAtendentes()

    atendentes.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

preencheAtendente()