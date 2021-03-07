/* Efecto del navegador con Headroom.js */
    
    var encabezado = document.querySelector("#cabeza");
    var headroom = new Headroom(encabezado);

    headroom.init();


    //ocultar y mostrar  nav en base a la clase
  
    let boton = document.getElementById("btn-menu");

    boton.addEventListener("click", function(){
        document.querySelector("#menu .enlaces").classList.toggle("enlaces-active");
        document.querySelector("#btn-menu .icono").classList.toggle("far");
        document.querySelector("#btn-menu .icono").classList.toggle("fa-times-circle");
        
        
    });
        
   