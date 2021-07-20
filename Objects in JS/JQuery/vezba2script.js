$(function(){
    $("li:first").css("border-bottom", "2px solid red");
    $("li").css("text-transform", "uppercase");
    $(".active").css("color", "pink");
    var len = $("ul li").length;
    len = Math.floor(len/2);
    console.log(len)
    $("ul li:eq("+len+")").css("background-color", "yellow");
})