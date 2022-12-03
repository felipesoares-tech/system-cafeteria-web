if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa pagina')
    window.location.href = 'http://127.0.0.1:5500/login.html'
}

function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('loggedUser')
    window.location.href = 'http://127.0.0.1:5500/login.html'
}

var loggedUser = JSON.parse(localStorage.getItem('loggedUser')) 
let logged = document.getElementById('logged')
logged.innerHTML = `Olá ${loggedUser.nome}`


function menuLogin(){
    let ul = document.getElementById('login-itens')
    let imgUser = document.getElementById('user-logado')
    
    if(ul.style.display != 'block'){
        ul.setAttribute('style','display:block; ')
        imgUser.setAttribute('style','outline: 3px solid rgba(110, 135, 216, 0.692);')
    }
    else{
        ul.setAttribute('style','display:none;')
        imgUser.removeAttribute('style')
    }
}