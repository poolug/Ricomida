$(document).ready(function(){

    //Emite alerta al hacer clic al botón Enviar Correo
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctame...");
    });

    //Tooltip para los botones del header
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //Cambia color de texto al hacer doble clic en Ingredientes y Preparación
    $(".red").dblclick(function(){
        $(this).css("color", "red");
    });

    //Desaparece y aparece el contenido de las card, al hacer clic en su título.
    $(".card-title").click(function(){
        $(".card-text").toggle("slow");
    });

});
