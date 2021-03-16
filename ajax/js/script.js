let show = true;
$(function () {
    $("#act").click(function(){
        if(show){
            $("#conteudo").load("./arquivos/arquivo.txt", function (data) {
                console.log(data);
                !show;
                console.log(show);
            });
        }
        console.log(show);
    });
});

