

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const formulario = document.getElementById('formularior')
const fusuario= document.getElementById('usuario')
const fnombre = document.getElementById('rname')
const femail = document.getElementById('remail')
const fpassw = document.getElementById('rpass')
const fnfono = document.getElementById('rfono')

formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    e.stopPropagation()

    const data = new FormData(formulario)

    if (!expresiones.usuario.test(data.get('rusuario').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto correo')
        campoerror(fusuario)
        alert('Error.. debe ingresar un usuario valido');  
        document.datos.rusuario.focus(); 
             
        return
    }else{
        campovalido(fusuario)
    }
//----------------------------------------------------------------------------       
    if (!expresiones.nombre.test(data.get('rnombre').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto correo')
        campoerror(fnombre)
        alert('Error.. debe ingresar caracteres validos');  
        document.datos.rnombre.focus(); 
             
        return
    }else{
        campovalido(fnombre)
    }
//----------------------------------------------------------------------------       
    if (!expresiones.correo.test(data.get('rcorreo').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto correo')
        campoerror(femail)
        alert('Error.. debe ingresar un correo electronico valido');  
        document.datos.rcorreo.focus(); 
             
        return
    }else{
        campovalido(femail)
    }
//----------------------------------------------------------------------------       
    if (!expresiones.password.test(data.get('rpassword').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto correo')
        campoerror(fpassw)
        alert('Error.. debe ingresar una contraseña valida');  
        document.datos.rpassword.focus(); 
             
        return
    }else{
        campovalido(fpassw)
    }
//----------------------------------------------------------------------------       
    if (!expresiones.telefono.test(data.get('nfono').trim())){//trim para limpiar los espacios en blanco
        console.log('no hay texto correo')
        campoerror(fnfono)
        alert('Error.. debe ingresar un usuario valido');  
        document.datos.nfono.focus(); 
             
        return
    }else{
        campovalido(fnfono)
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
    },5000)
}


function CambiarMayusculas(){
    var a = document.getElementById('rname');
    a.value = a.value.toUpperCase();
}