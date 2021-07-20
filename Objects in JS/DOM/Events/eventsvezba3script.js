var button = document.querySelector("button");
var wrapper = document.querySelector("#wrapper");

function movePlayer (event) {
    var x = event.clientX;
    var y = event.clientY;
    var player = document.querySelector("img")
   
    player.style.left = x - 150/2 + "px";
    player.style.top = y - 150/2 + "px";
}

wrapper.addEventListener("click", movePlayer);


function removeHandler() {
    wrapper.removeEventListener("click", movePlayer);
}


