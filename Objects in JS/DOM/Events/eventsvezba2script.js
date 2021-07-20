function getMessage() {
var input = document.querySelector("input").value;
return input;
}

function sendMessageToDesplayArea () {
var textFromInput = getMessage();
    if(textFromInput != "") {
        var area = document.querySelector(".displayArea");
        var paragrafForMessage = document.createElement("p");
        var textOfMessage = document.createTextNode(textFromInput) 
        paragrafForMessage.appendChild(textOfMessage);
        area.appendChild(paragrafForMessage);
        document.querySelector("input").value = "";
    }   
    
}


