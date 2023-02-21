const registerButton = document.getElementById('register'); /*Boton al presionar que no tiene usuario*/
const registerColor = document.getElementById('register-color'); /*Color del div*/
const loginColor = document.getElementById('login-color'); /*Color del div*/
const loginContent = document.getElementById('login-content'); /*Formulario login*/
const loginButton = document.getElementById('login'); /*Boton al presionar que tiene usuario*/
const registerContent = document.getElementById('register-content'); /*Formulario registro*/
const contentFather = document.getElementById('Content-father'); /*Contenido padre de todos los elementos*/
const svgiconeyeVisible = document.getElementById('eye__visible'); /*EyeVisibleLogin*/
const svgiconeyeHidden = document.getElementById('eye__hidden'); /*EyeHiddenLogin*/
const inputPasswordRegister = document.getElementById('input__password__register'); /*InputPassword*/
const inputPassword = document.getElementById('input__password'); /*InputLogin*/
const inputUser = document.getElementById('input__user'); /*Input user*/
const inputuserRegister = document.getElementById('input__user__register'); /*Input User Register*/
const eyesLogin = document.getElementById('eyes_login'); /*EyesDivLogin*/
const eyesRegister = document.getElementById('eyes_register'); /*EyesDivRegister*/
const svgiconeyeVisibleRegister = document.getElementById('eye__visible__register'); /*EyeVisibleRegister*/
const svgiconeyeHiddenRegister = document.getElementById('eye__hidden__register'); /*EyeHiddenRegister*/
const alertNotification = document.getElementById('alert'); /*Notificacion*/


svgiconeyeVisibleRegister.addEventListener('click', () => {
    inputPasswordRegister.type = 'text';
    svgiconeyeVisibleRegister.style.opacity = '0';
    svgiconeyeVisibleRegister.style.pointerEvents = 'none';

    svgiconeyeHiddenRegister.style.opacity = '1';
    svgiconeyeHiddenRegister.style.pointerEvents = 'all';
})

svgiconeyeHiddenRegister.addEventListener('click', () => {
    inputPasswordRegister.type = 'password';
    svgiconeyeHiddenRegister.style.opacity = '0';
    svgiconeyeHiddenRegister.style.pointerEvents = 'none';

    svgiconeyeVisibleRegister.style.opacity = '1';
    svgiconeyeVisibleRegister.style.pointerEvents = 'all';
})

svgiconeyeVisible.addEventListener('click', () => {
    inputPassword.type = 'text';
    svgiconeyeVisible.style.opacity = '0';
    svgiconeyeVisible.style.pointerEvents = 'none';

    svgiconeyeHidden.style.opacity = '1';
    svgiconeyeHidden.style.pointerEvents = 'all';
})

svgiconeyeHidden.addEventListener('click', () => {
    inputPassword.type = 'password';
    svgiconeyeHidden.style.opacity = '0';
    svgiconeyeHidden.style.pointerEvents = 'none';

    svgiconeyeVisible.style.opacity = '1';
    svgiconeyeVisible.style.pointerEvents = 'all';
})

inputPassword.addEventListener('input', () => {
    inputPassword.value.length > 0 ? eyesLogin.style.opacity = '1' : eyesLogin.style.opacity = '0';
})

inputPasswordRegister.addEventListener('input', () => {
    inputPasswordRegister.value.length > 0 ? eyesRegister.style.opacity = '1' : eyesRegister.style.opacity = '0';
})

const openLogin = () => {
    contentFather.classList.replace("close", "open");
}

const HiddenEye = () => {
    eyesRegister.style.display = 'none';
    eyesRegister.style.opacity = '0';
    eyesLogin.style.display = 'block';
    eyesLogin.style.opacity = '0';
}

const VisibleEye = () => {
    eyesRegister.style.display = 'block';
    eyesRegister.style.opacity = '0';
    eyesLogin.style.display = 'none';
    eyesLogin.style.opacity = '0';
}

/*Al cambiar de registro a login o al reves, limpiamos lo que se escribio
con estas funciones el input usuario y contraseña*/
const clearInputRegister = () => {
    inputPasswordRegister.value = ''
    inputuserRegister.value = ''
}

const clearInputLogin = () => {
    inputPassword.value = ''
    inputUser.value = ''
}

const registerBlockColor = () => {
    registerColor.style.backgroundColor = "#DC3535";
    loginColor.style.backgroundColor = "black";
}

const loginBlockColor = () => {
    registerColor.style.backgroundColor = "black";
    loginColor.style.backgroundColor = "#DC3535";
}

registerButton.addEventListener('click', () => {
    /*Desaparecer el login*/
    loginContent.style.opacity = "0";
    loginContent.style.pointerEvents = "none";
    contentFather.classList.remove('open');
    contentFather.classList.add('close');

    /*Registro aparece*/
    registerContent.style.opacity = "1";
    registerContent.style.pointerEvents = "all";
    if (inputPassword.value.length > 0 || inputUser.value.length > 0) {
        setTimeout(clearInputLogin, 1100);
    }
    /*Temporizador para qué reemplazar la animacion cerrada al abierta*/
    setTimeout(openLogin, 1100);
    setTimeout(VisibleEye, 1100);
    setTimeout(registerBlockColor, 1100)
})

loginButton.addEventListener('click', () => {
    /*Aparece el login*/
    loginContent.style.opacity = "1";
    loginContent.style.pointerEvents = "all";
    contentFather.classList.remove('open');
    contentFather.classList.add('close');

    /*Desaparecer registro*/
    registerContent.style.opacity = "0";
    registerContent.style.pointerEvents = "none";
    if (inputPasswordRegister.value.length > 0 || inputuserRegister.value.length > 0) {
        setTimeout(clearInputRegister, 1100);
    }

    /*Temporizador para qué reemplazar la animacion cerrada(close) al abierta(open)*/
    setTimeout(openLogin, 1100);
    setTimeout(HiddenEye, 1100);
    setTimeout(loginBlockColor, 1100);
})

/*Notificacion*/
const displayNoneNotification = () => {
    alertNotification.classList.add('close_notifiy');
}

if(alertNotification){
    setTimeout(displayNoneNotification,2500);
}
