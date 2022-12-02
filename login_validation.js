function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

let form = document.getElementById('form-login')
let submit = document.getElementById('btn-login')
var chk = 0


function logar(){ //Function para login no sistema
    
    let login = document.getElementById('mail').value // recupera o login informado pelo usuario
    let senha = document.getElementById('senha').value // recupera a senha informada pelo usuario
    let listaUser = [] // Lista para armazenar todos os usuários já existentes

    let userValid = { //objeto para validar o usuário que ficará logado.
        email: '',
        nome:'',
        id:'',
        senha:''
    }

    data = get("http://127.0.0.1:8080/attendant")
    listaUser = JSON.parse(data)
    
    listaUser.forEach((item) =>{
        if(login == item.email && senha == item.senha){ // caso encontre o login e senha do usuario na lista de usuarios, iremos recuperar o objeto
            userValid = {
                email: item.email,
                nome: item.nome,
                id: item.id,
                senha: item.senha
            }
            chk = 1
        }
    })

    if(login == userValid.email && senha == userValid.senha && chk == 1){  // se o login e senha
        window.location.href = 'http://127.0.0.1:5500/index.html'
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token',token)
        localStorage.setItem('loggedUser', JSON.stringify(userValid))
        chk = 0
    }else{
        alert('Deu errado')
    }

}