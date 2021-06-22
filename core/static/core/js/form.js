/*
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
*/

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const formulario = document.getElementById('formulario')
const fcorreo = document.getElementById('email')
const fnombre = document.getElementById('name')
const ffono = document.getElementById('telefono')
const fasunto = document.getElementById('asunto')
const fmensaje = document.getElementById('mensaje')
const fcheck = document.getElementById('acept')
const fboton = document.getElementById('boton')


formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    e.stopPropagation()

    const data = new FormData(formulario)

    console.log(data.get('correo'))
//----------------------------------------------------------------------------
    if (!expresiones.correo.test(data.get('correo').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto correo')
        campoerror(fcorreo)
        alert('Error.. debe ingresar una direccion de correo valida');  
        document.datos.correo.focus(); 
             
        return
    }else{
        campovalido(fcorreo)
    }
//----------------------------------------------------------------------------
    if (!expresiones.nombre.test(data.get('nombre').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto nombre')
        campoerror(fnombre)
        alert('rellene el campo Nombre correctamente ');  
        document.datos.nombre.focus(); 
        return

    }else{
        campovalido(fnombre)
    }
//----------------------------------------------------------------------------
    if (!expresiones.telefono.test(data.get('nfono').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto fono')
        campoerror(ffono)
        alert('rellene el campo Teléfono correctamente');  
        document.datos.nfono.focus();
        return

    }else{
        campovalido(ffono)
    }
//----------------------------------------------------------------------------
    if (!data.get('asuntom').trim()){//trim para limpiar los espacios en blanco
        console.log('no hay texto')
        campoerror(fasunto)
        alert('rellene el campo asunto');  
        document.datos.asuntom.focus();
        return

    }else{
        campovalido(fasunto)
    }
//----------------------------------------------------------------------------    
    if (!data.get('mensajet').trim()){//trim para limpiar los espacios en blanco
        console.log('no hay texto')
        campoerror(fmensaje)
        alert('rellene el campo mensaje');  
        document.datos.mensajet.focus();
        return

    }else{
        campovalido(fmensaje)
    }
//----------------------------------------------------------------------------    
    if (!acept.checked){//trim para limpiar los espacios en blanco
        console.log('no hay texto')
        
        campoerror(fcheck)
        alert('Acepte los Términos y Condiciones');  
        document.datos.check.focus();
        return
    }
    else{
        campovalido(fcheck)
    }
//----------------------------------------------------------------------------    

    console.log('campos completados')
    formulario.reset();

    document.getElementById('formulario__msj-exito').classList.remove('d-none')
    setTimeout(()=>{
        document.getElementById('formulario__msj-exito').classList.add('d-none')
    }, 5000)
    
    document.getElementById('formulario').classList.remove('is-valid')
})

const campoerror=(campo)=>{
    campo.classList.add('is-invalid')
    campo.classList.remove('is-valid')
}

const campovalido=(campo)=>{
    campo.classList.remove('is-invalid')
    campo.classList.add('is-valid')
    setTimeout(()=>{
        campo.classList.remove('is-invalid')
        campo.classList.remove('is-valid')
    },2000)
}


function CambiarMayusculas(){
    var a = document.getElementById('name');
    a.value = a.value.toUpperCase();
}