function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

let form = document.getElementById('form-login')
let submit = document.getElementById('btn-login')
var chk = 0


function logar(){
    
    let login = document.getElementById('mail').value
    let senha = document.getElementById('senha').value
    let listaUser = []

    let userValid = {
        email: '',
        nome:'',
        senha:''
    }

    data = get("http://127.0.0.1:8080/attendant")
    listaUser = JSON.parse(data)
    console.log(listaUser)

    listaUser.forEach((item) =>{
        if(login == item.email && senha == item.senha){
            userValid = {
                email: item.email,
                nome: item.nome,
                senha: item.senha
            }
            chk = 1
        }
    })

    if(login == userValid.email && senha == userValid.senha && chk == 1){
        window.location.href = 'http://127.0.0.1:5500/index.html'
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token',token)
        localStorage.setItem('loggedUser', JSON.stringify(userValid))
        chk = 0
    }else{
        alert('Deu errado')
    }

}