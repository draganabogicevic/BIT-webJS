$("#wrapper").click(function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var player = $("img");
   
    player.style.left = x - 150/2 + "px";
    player.style.top = y - 150/2 + "px";
})



function removeHandler() {
    wrapper.removeEvent("click", movePlayer);
}


