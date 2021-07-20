var galleryLinks = ["https://image.freepik.com/free-vector/summer-hand-painted-style-abstract-leaves-background-design_60389-55.jpg", "https://image.freepik.com/free-vector/summer-pattern-background-zoom_52683-41274.jpg", "https://image.freepik.com/free-vector/hand-painted-summer-tropical-pattern_52683-62786.jpg", "https://img.freepik.com/free-vector/hand-painted-watercolor-summer-tropical-pattern_52683-63361.jpg?size=338&ext=jpg", "https://image.freepik.com/free-vector/hand-painted-summer-tropical-pattern_52683-63047.jpg", "https://image.freepik.com/free-vector/flat-summer-tropical-pattern_23-2148970592.jpg"];

var div = $("body").html("<div></div>");
var divForImgs = $("div").addClass("imgGallery");
for(var i = 0; i<galleryLinks.length; i++) {
$(".imgGallery").prepend($('<img>',{src:galleryLinks[i]}));
}
divForImgs.prepend("<h1>Summer Photos</h1>")

var img = $("img");

img.each(function(index, element) {
    $(this).attr("width", (function (min, max) {
        return  Math.floor(Math.random() * (max - min) + min);
    })(180, 350));
    $(this).attr("height", (function (min, max) {
        return  Math.floor(Math.random() * (max - min) + min);
    })(180, 350));
})

img.each(function(index, element) {
    if($(this).attr("width") < 200) {
        $(this).css("border", "green solid 10px");
    }
}) 






