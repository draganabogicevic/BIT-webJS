document.addEventListener("DOMContentLoaded", function() {
    var textFromLi = document.querySelector("ul li").firstChild.textContent;
    alert(textFromLi);
    function replaceText(string) {
       return document.querySelector("ul").lastElementChild.textContent = string;
    }

    replaceText("Online Katalog");
})