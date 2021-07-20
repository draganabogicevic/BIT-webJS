function validateForm () {
    var input = document.querySelectorAll("input");
    for(var i = 0; i<input.length; i++) {
        var current = input[i]; 
        if(current.hasAttribute("required") && current.value === "") {
            current.style.border = "2px red solid";
        }
    }
       
}
   
    
    
