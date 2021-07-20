document.addEventListener("DOMContentLoaded", function() {
    function createDropDown (array, node){
       
        var select = "<select>"; 
        for(var i = 0; i<array.length; i++) {
            select += "<option>" + array[i];   
        }    
        select += "</select>";

        node.innerHTML = select;
        
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

