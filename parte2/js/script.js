$(function(){
    $(":input").css("backgroundColor", "yellow");
    $(":text, :password").css("backgroundColor", "gray");
    $(":radio").parent().css("backgroundColor", "blue");
    $(":checkbox").parent().css("backgroundColor", "orange");
    $(":submit").css("backgroundColor", "green");
    $(":reset").css("backgroundColor", "blue");
    $(":disabled").css("opacity", "0.5");
    $(":checkbox:checked").parent().css("backgroundColor", "black")
    $(":text").val($(":option:selected").text() + " está selecionado");
    $(":radio:checked").css("backgroundColor", "red");
});