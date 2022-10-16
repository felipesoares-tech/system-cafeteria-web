function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
    const input = id('cpf')

	id('tel').onkeyup = function(){
		mascara( this, mtel );
	}

    input.onkeyup = function(){
        let inputLength = input.value.length
        if(inputLength === 3 || inputLength === 7)
            input.value += '.'
        else if(inputLength == 11)
            input.value += '-'
    }
}




    


