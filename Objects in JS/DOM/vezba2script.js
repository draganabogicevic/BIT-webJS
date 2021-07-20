document.addEventListener("DOMContentLoaded", function() {
    var secondLi = document.querySelector(".active");
    secondLi.removeAttribute("class");

    var ulParent = secondLi.parentElement;
    var divParent = ulParent.parentElement;
    var divPrevious = divParent.previousElementSibling;
    var ulPrevious = divPrevious.children;
    var liPrevious = ulPrevious[0].children[0];
    liPrevious.className = "active";
})