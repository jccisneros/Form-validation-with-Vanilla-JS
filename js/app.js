//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');

const spinner = document.getElementById('spinner');
const loaders = document.getElementById('loaders');

const formularioEnviar = document.getElementById('enviar-mail');

//funciones

const startApp = () => {
  btnEnviar.disabled = true;
  
}

const validarCampo = (contenido) =>{  

  let content = contenido.target;

  validarTexto(content);

  if(content.type === 'email'){
    validarEmail(content);
  }

  let errores = document.querySelectorAll('.error');

  if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){    
    if (errores.length === 0){
      btnEnviar.disabled = false;      
    }else{
      btnEnviar.disabled = true;      
    }
    
  }
  
}

const validarTexto = (campo) => {

  if(campo.value.length > 0){    
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  }else{    
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');  
  }    
  
}

const validarEmail = (campo) => {

  const email = campo.value;

  if(email.indexOf('@') !== -1 && email.indexOf('.com') !== -1){
    campo.style.borderBottomColor = 'green';    
    campo.classList.remove('error');
  }else{
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');  
  }

}

const enviarEmail = (e) => {

  e.preventDefault();

  spinner.style.display = 'block';
  enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';
  enviado.width = '180';

  setTimeout(() =>{
    spinner.style.display = 'none';
    loaders.appendChild(enviado);    

    setTimeout(() =>{
      enviado.remove();
      formularioEnviar.reset();
    }, 3000);

  }, 3000);  

}

const resetearFormulario = (e) => {

  e.preventDefault();
  formularioEnviar.reset();

}

//eventListener

const eventListeners = () => {

  document.addEventListener('DOMContentLoaded', startApp); 

  email.addEventListener('blur', validarCampo)
  asunto.addEventListener('blur', validarCampo)
  mensaje.addEventListener('blur', validarCampo)

  btnEnviar.addEventListener('click', enviarEmail);
  btnReset.addEventListener('click', resetearFormulario);

}

eventListeners();