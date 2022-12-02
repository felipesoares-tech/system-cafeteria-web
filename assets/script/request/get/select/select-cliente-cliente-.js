function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function buscacliente(){
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
    let clients = buscacliente()

    clients.forEach(element => {
        let option = criarOption(element)
        select.appendChild(option)
    })
}

function buscaCliente(id){
    data = get(`http://127.0.0.1:8080/client/${id}`)
    let cliente = JSON.parse(data)
    return cliente
}

function preencheCampos() {
    var select = document.getElementById("sel-cliente")
    var inputNome = document.getElementById("name")
    var inputCpf = document.getElementById("cpf")
    var inputTelefone = document.getElementById('tel')
    var inputDataNasc = document.getElementById('date')
    
    var idCliente = select.value
    var cliente = buscaCliente(idCliente)

    /*Preenchendo os inputs*/ 
    inputNome.value = cliente.nome
    inputCpf.value = cliente.cpf
    inputTelefone.value = cliente.telefone
    inputDataNasc.value = cliente.dataNascimento

    select.onchange = function () { /*Funções a executar quando o select sofrer alguma alteração */
        let idCliente = this.value;

        /*Buscando valor unitário e quantidade do produto quando o select é alterado */
        let cliente = buscaCliente(idCliente)
        

        /*Preenchendo os inputs*/ 
        inputNome.value = cliente.nome
        inputCpf.value = cliente.cpf
        inputTelefone.value = cliente.telefone
        inputDataNasc.value = cliente.dataNascimento
        
        }
}
preencheClient()
preencheCampos()