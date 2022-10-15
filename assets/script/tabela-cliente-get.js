function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(usuario){
    console.log(usuario)
    linha = document.createElement("tr")
    tdCpf = document.createElement("td")
    tdNome = document.createElement("td")
    tdId = document.createElement("td")
    tdEmail = document.createElement("td")
    tdTelefone = document.createElement("td")
    tdDataNascimento = document.createElement("td")

    tdCpf.innerHTML = usuario.cpf
    tdNome.innerHTML = usuario.nome
    tdId.innerHTML = usuario.id
    tdEmail.innerHTML = usuario.email
    tdTelefone.innerHTML = usuario.telefone

    data = new Date(usuario.dataNascimento)
    tdDataNascimento.innerHTML = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'}) 

    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdCpf)
    linha.appendChild(tdEmail)
    linha.appendChild(tdTelefone)
    linha.appendChild(tdDataNascimento)

    linha.setAttribute("class", "row")

    return linha;

}

function main(){
    data = get("http://127.0.0.1:8080/clientes")
    usuarios = JSON.parse(data)

    let tabela = document.getElementById("tabela")
    usuarios.forEach(element => {
        let linha = criarLinha(element)
        tabela.appendChild(linha)
    })
}

main()