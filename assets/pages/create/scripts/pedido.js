var contOrder = 0
var serverResponse = {}

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function post(url, body) {
    console.log("Body=", body)
    var request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))

}

async function post2(url, init) {
    const response = await fetch(url, init)
    const data = await response.json()

    return data
}





function finalizarPedido() {
    if(listItem.length > 0){
        let dataAttendant = get(`http://127.0.0.1:8080/attendant/${loggedUser.id}`)
        var select = document.getElementById('client')
        var clientId = select.options[select.selectedIndex].value
        let dataClient = ''
        clientId != 'x' ? dataClient = get(`http://127.0.0.1:8080/client/${clientId}`) : dataClient = null
    
        let attendantObj = JSON.parse(dataAttendant)
        let clientObj = ''
        if (dataClient != null)
            clientObj = JSON.parse(dataClient)
        else
            clientObj = null
    
        let order = {
            client: clientObj,
            attendant: attendantObj
        }
    
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }
    
        const cadastrarItemsPedidos = async () => {
            const orderObj = await post2('http://127.0.0.1:8080/order/', init)
            listItem.forEach((item) => {
                item.order = orderObj
                post('http://127.0.0.1:8080/item/',item)
                
            })
            location.reload()
        }
    
        cadastrarItemsPedidos()
    
        let formPedido = document.querySelector('.box-pedido')
        formPedido.reset()

    }else
        alert('Insira pelomenos um item!')

}



