if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa pagina')
    window.location.href = 'http://127.0.0.1:5500/login.html'
}

function logout(){
    localStorage.removeItem('token')
    window.location.href = 'http://127.0.0.1:5500/login.html'
}

let loggedUser = JSON.parse(localStorage.getItem('loggedUser')) 
let logged = document.getElementById('logged')
logged.innerHTML = `Olá ${loggedUser.nome}`


function menuLogin(){
    let ul = document.getElementById('login-itens')
    
    if(ul.style.display != 'block')
        ul.setAttribute('style','display:block;')
    else
        ul.setAttribute('style','display:none;')
}