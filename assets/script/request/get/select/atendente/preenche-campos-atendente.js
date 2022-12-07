function buscaAtendente(id) {
    data = get(`http://127.0.0.1:8080/attendant/${id}`)
    let attendant = JSON.parse(data)
    return attendant
}

function criarOption(atendente) {
    let option = document.createElement('option')

    option.setAttribute('value', `${atendente.id}`);
    text = document.createTextNode(`${atendente.nome}`)
    option.appendChild(text)

    return option
}

function preencheCampos() {
    var select = document.getElementById("sel-atendente")
    var inputNome = document.getElementById("name")
    var inputCpf = document.getElementById("cpf")
    var inputEmail = document.getElementById("mail")
    var inputSenha = document.getElementById("senha")
    var inputTelefone = document.getElementById('tel')
    var inputDataNasc = document.getElementById('date')
    var selectEstado = document.getElementById('state')
    var selectCidade = document.getElementById('city')


    var idAtendente = select.value
    var atendente = buscaAtendente(idAtendente)

    /*Preenchendo os inputs*/
    inputNome.value = atendente.nome
    inputCpf.value = atendente.cpf
    inputEmail.value = atendente.email
    inputSenha.value = atendente.senha
    inputTelefone.value = atendente.telefone
    inputDataNasc.value = atendente.dataNascimento

    if(atendente.cidade != null){
        selectEstado.value = atendente.cidade.uf
        preencheCidade()
        selectCidade.value = atendente.cidade.id

    }
 
    



    select.onchange = function () { /*Funções a executar quando o select sofrer alguma alteração */
        let idAtendente = this.value;

        /*Buscando valor unitário e quantidade do produto quando o select é alterado */
        let atendente = buscaAtendente(idAtendente)

        
        /*Preenchendo os inputs*/
        inputNome.value = atendente.nome
        inputCpf.value = atendente.cpf
        inputEmail.value = atendente.email
        inputSenha.value = atendente.senha
        inputTelefone.value = atendente.telefone
        inputDataNasc.value = atendente.dataNascimento

        if (atendente.cidade != null){
            selectEstado.value = atendente.cidade.uf
            preencheCidade()
            selectCidade.value = atendente.cidade.id

        }
        

    }
}

preencheCampos()