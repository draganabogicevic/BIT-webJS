document.addEventListener("DOMContentLoaded", function() {
    var ulSecond = document.querySelectorAll("ul")[1];
    ulSecond.className = "bg-info";
    console.log(ulSecond);

    var listElements = document.querySelectorAll("li");
    console.log(listElements);
    for(var i = 0; i<listElements.length; i++) {
        listElements[i].className = "bg-warning";
    }

    var thirdList = document.querySelectorAll("ul")[2];
    var thirdListEl = thirdList.children;
    console.log(thirdListEl);
    for(var i = 0; i<thirdListEl.length; i++) {
        thirdListEl[i].className = "bg-secondary";
        thirdListEl[i].style.textTransform = "uppercase";

    }

})