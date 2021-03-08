let boton = document.getElementById("btn-menu");

boton.addEventListener("click", function(){
    document.querySelector("#menu .enlaces").classList.toggle("enlaces-active");
    document.querySelector("#btn-menu .icono").classList.toggle("far");
    document.querySelector("#btn-menu .icono").classList.toggle("fa-times-circle");

});