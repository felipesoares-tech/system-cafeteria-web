function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function buscaCidades(){
    let select = document.getElementById('state');
    var uf = select.options[select.selectedIndex].value;

    data = get(`http://127.0.0.1:8080/city/by-uf?uf=${uf}`)
    let cidades = JSON.parse(data)
    return cidades
}

function criarOption(cidade) {
    let option = document.createElement("option")
    option.setAttribute('value', `${cidade.id}`);
    text = document.createTextNode(`${cidade.nome.toUpperCase()}`)
    option.appendChild(text)

    return option;
}

function preencheCidade() {
    $("#city").empty();
    var select = document.getElementById("city")
    let cidades = buscaCidades()

    cidades.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

preencheCidade()