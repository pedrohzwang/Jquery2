$(function(){
    $(".coordenadas").mouseenter(function(){
        $(".valores").fadeIn();
    });
    $(".coordenadas").mousemove(function(e){
        console.log(e.clientX, e.clientY);
        var posicoes = $(this).offset();
        var x = e.clientX - posicoes.left;
        var y = e.clientY - posicoes.top;
        $(".valores").html(`coordenadas x: ${x} e y: ${y}`);
    });
    $(".coordenadas").mouseout(function(){
        $(".valores").fadeOut();
    });
    /*$(".coordenadas").mouseenter(function(){
        console.log('entrou');
    });*/
});