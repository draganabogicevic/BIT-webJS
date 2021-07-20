// document.addEventListener("DOMContentLoaded",function(){



// var button1 = document.querySelector("#firstButton")

// button1.addEventListener("click", function toggleBackground() {
//     var body = document.querySelector("body");
//     if(body.className === "bg-dark") {
//         body.className = "bg-light";
//     } else if (body.className === "bg-light"){
//         body.className = "bg-dark";
//     }  
    
//     var button2 = document.querySelector("#secondButton");

//     button2.addEventListener("click", function(){
//     button1.removeEventListener("click", toggleBackground);
// })
// })
  




// });

var interval;
var body = document.querySelector("body");
var button2 = document.querySelector("#secondButton");

var toggleBackground = function () {
   body.classList.toggle("bg-dark"); 
};

var stopToggling = function() {
    if(!interval) {
        interval = setInterval(toggleBackground, 300);
    } else {
        clearInterval(interval);
        interval = undefined;
    }
}
    


    
    
