document.addEventListener("DOMContentLoaded", function() {
    function createDropDown (array, node){
        var select = document.createElement("select");   
        node.appendChild(select);
        for(var i = 0; i<array.length; i++) {
            var selectElements = document.createElement("option");
            selectElements.text = array[i]; 
            selectElements.value = i;
            select.appendChild(selectElements);
        }    
        
    }

    createDropDown(["Beograd", "Novi Sad", "Subotica"], document.querySelector(".first"));
    createDropDown(["Zagreb", "Osjek", "Dubrovnik"], document.querySelector(".second"));

    function addStyle() {
        var first = document.querySelector(".first");
        first.className = "dropdown m-5";

        var second = document.querySelector(".second");
        second.className = "dropdown m-5";
    }
    addStyle();
    
    

})