var contOrder = 0
var serverResponse = {}

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

async function post(url, body) {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    const response = await fetch(url, init)
    return await response.json()
}

function finalizarPedido() {
    if(listItem.length > 0){ //Verifica se possui algum item na lista de itens
        let dataAttendant = get(`http://127.0.0.1:8080/attendant/${loggedUser.id}`)
        var select = document.getElementById('client')
        var clientId = select.options[select.selectedIndex].value // busca o id do cliente que está selecionado no combo box
        let dataClient = null
        clientId != 'x' ? dataClient = get(`http://127.0.0.1:8080/client/${clientId}`) : dataClient = null // se o id que estiver no combo for x, então a opção selecionada é "nenhum cliente" logo, o cliente deverá permanecer nulo
    
        let attendantObj = JSON.parse(dataAttendant) // recuperando o objeto atendente
        let clientObj = null
        if (dataClient != null)
            clientObj = JSON.parse(dataClient) // recuperando o objeto cliente (caso o mesmo tenha sido informado)
        else
            clientObj = null
    
        let order = { // criando o pedido, informando o cliente e o atendente
            client: clientObj,
            attendant: attendantObj
        }
    
        const cadastrarItemsPedidos = async () => {
            const orderObj = await post('http://127.0.0.1:8080/order/', order) //Fazendo request de post com a ordem criada
            listItem.forEach((item) => {
                item.order = orderObj //atribuindo o pedido a cada item da lista
                post('http://127.0.0.1:8080/item/',item) //Fazendo request de post com os itens já com seus respectivos pedidos
                
            })
            location.reload() //atualiza a página
        }
    
        cadastrarItemsPedidos()
    
        let formPedido = document.querySelector('.box-pedido')
        formPedido.reset() //limpa os campos do formulário

    }else
        alert('Insira pelomenos um item!')
}



