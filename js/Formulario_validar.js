const Formulario = document.getElementById("Formulario");  //aceder a la idformulario

const tota_input = document.querySelectorAll("#Formulario input");//aceder a todos los input del formulario, y se almacena en la constante tota_input en forma de arreglo

const elementos_validacion = {
    nombre: /^[A-Za-z\s]{3,40}$/,
    edad: /^[0-9]{1,3}$/,
    contraseña:  /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}

const validarFormulario = function(e){
   switch (e.target.name){
           
       case "nombre"    :Validar_campos(elementos_validacion.nombre,e.target,"nombre"); 
       break;

       case "edad"      : if (elementos_validacion.edad.test(e.target.value)){
            document.getElementById("grupo__edad").classList.remove("grupos-incorrecto");
       }else{
        document.getElementById("grupo__edad").classList.add("grupos-incorrecto");}
       break;
           

       case "contraseña":Validar_campos(elementos_validacion.contraseña,e.target,"contraseña");
            coincidir_contraseña(); 
       break;
           
       case "coincidir" :coincidir_contraseña();          
       break;
           
       case "correo"    :Validar_campos(elementos_validacion.correo,e.target,"correo");
       break;
           
       case "telefono"  :Validar_campos(elementos_validacion.telefono,e.target,"telefono");
       break;
       
   }
}

const Validar_campos= function(elementos_validacion,input,campo){

        if (elementos_validacion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove("grupos-incorrecto");
            document.getElementById(`grupo__${campo}`).classList.add("grupos-correcto");
            document.querySelector(`grupo__${campo} i`).classList.remove("fa-exclamation-circle");
            document.querySelector(`grupo__${campo} i`).classList.add("fa-check-circle");
            
       } else{
            document.getElementById(`grupo__${campo}`).classList.add("grupos-incorrecto");
            document.getElementById(`grupo__${campo}`).classList.remove("grupos-correcto");
            document.querySelector(`grupo__${campo} i`).classList.remove("fa-check-circle");
            document.querySelector(`grupo__${campo} i`).classList.add("fa-exclamation-circle");
        }

}

const coincidir_contraseña=function(){
    const contraseña1= document.getElementById("contraseña");
    const contraseña2= document.getElementById("Coincidir");
    
    if (contraseña1.value !== contraseña2){
         document.getElementById("grupo__coincidir").classList.add("grupos-incorrecto");
         document.getElementById("grupo__coincidir").classList.remove("grupos-correcto");
         document.querySelector("#grupo__coincidir i").classList.remove("fa-check-circle");
         document.querySelector("#grupo__coincidir i").classList.add("fa-exclamation-circle");
        }else{
         document.getElementById("grupo__coincidir").classList.remove("grupos-incorrecto");
         document.getElementById("grupo__coincidir").classList.add("grupos-correcto");
         document.querySelector("#grupo__coincidir i").classList.add("fa-check-circle");
         document.querySelector("#grupo__coincidir i").classList.remove("fa-exclamation-circle");
        }
}






tota_input.forEach(function(en_input){
    en_input.addEventListener('keyup', validarFormulario);
    en_input.addEventListener('blur', validarFormulario);
});

