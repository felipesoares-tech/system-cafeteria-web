function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function finalizarPedido() {
    let dataAttendant = get(`http://127.0.0.1:8080/attendant/${loggedUser.id}`)
    var select = document.getElementById('client')
    var clientId = select.options[select.selectedIndex].value
    let dataClient = get(`http://127.0.0.1:8080/client/${clientId}`)

    let attendant = JSON.parse(dataAttendant)
    let client = JSON.parse(dataClient)

    console.log(client)


}
