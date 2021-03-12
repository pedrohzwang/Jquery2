

$(function () {
    //$("#conteudo").text("texto alterado com jquery");
});

/*$.get("https://pt.wikipedia.org/wiki/Jogo_da_velha", function(msg){
    alert(msg);
});*/


$("#act").click(function () {
    $("#conteudo").load("arquivo.txt", function (responseTxt) {
    }});
