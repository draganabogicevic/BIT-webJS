function greetingMessage () {
    alert("Hello everyone!");
}

greetingMessage();

function questionForUser () {
    var message = prompt("Are you having a good time?");
    var confirmation = confirm("We will submit this answer now! " + message);
    if(confirmation) {
        return alert("Bravooo!")
    }
}    

questionForUser();


