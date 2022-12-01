function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function post(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.responseType = 'json'
    request.send(JSON.stringify(body))
}

var contOrder = 0

function finalizarPedido() {
    let dataAttendant = get(`http://127.0.0.1:8080/attendant/${loggedUser.id}`)
    var select = document.getElementById('client')
    var clientId = select.options[select.selectedIndex].value
    let dataClient = ''
    clientId != 'x' ? dataClient = get(`http://127.0.0.1:8080/client/${clientId}`) : dataClient = null

    let attendantObj = JSON.parse(dataAttendant)
    let clientObj = ''
    if(dataClient != null)
        clientObj = JSON.parse(dataClient)
    else
        clientObj = null

    order = {
        id: contOrder,
        client: clientObj,
        attendant: attendantObj
    }

    post('http://127.0.0.1:8080/order/',order)

    listItem.forEach((item) =>{
        if(item != null)
            item.order = order
    })

   
    listItem.forEach((item)=>{
        if(item != null)
            post('http://127.0.0.1:8080/item/',item)
    })

    contOrder += 1
}
