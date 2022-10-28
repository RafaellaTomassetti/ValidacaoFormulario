    const form  = document.getElementById('form'); //essa variavel ela pega o formulario pela ID
    const campos = document.querySelectorAll('.required'); //Pega todos os elementos que tem a classe required
    const spans = document.querySelectorAll('.span-required'); //Pega todos os elementos que tem a classe span-required
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // Este é um validador de email (verifica se tem os simbolos necessários)

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        nameValidate();
        emailValidate();
        mainPasswordValidate();
        comparePassword();
        textValidate();
    });

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function nameValidate(){ // função que valida o nome
        if(campos[0].value.length < 3)
        {
            setError(0);
        }
        else
        {
            removeError(0);
        }
    }

    function raValidate(){ // função que valida o email
        if(campos[1].value.length < 13)
        {
            setError(1);
        }
        else
        {
            removeError(1);
        }
    }

    function emailValidate(){ // função que valida o email
        if(!emailRegex.test(campos[2].value))
        {
            setError(2);
        }
        else
        {
            removeError(2);
        }
    }

    function mainPasswordValidate(){ //função que valida a senha
        if(campos[3].value.length < 8)
        {
            setError(3);
        }
        else{
            removeError(3);
        }
    }

    function comparePassword(){ //compara os dois campos de senha
        if(campos[3].value == campos[4].value && campos[4].value.length >= 8) {
            removeError(4);
        }else {
            setError(4);
        }
    }

    function textValidate(){
        if(campos[5].value.length < 100)
        {
            setError(5);
        }
        else{
            removeError(5);
        }
    }

var nome = "";
var email = "";
var texto = "";
var ra = 0;
var senha = "";

function mostrar(){
    nome = document.getElementById("nome").value;
    document.getElementById("nomealuno").innerHTML = nome;

    email = document.getElementById("email").value;
    document.getElementById("emailaluno").innerHTML = email;

    ra = document.getElementById("ra").value;
    document.getElementById("raaluno").innerHTML = ra;

    texto = document.getElementById("descricao").value;
    document.getElementById("textoaluno").innerHTML = texto;
}

