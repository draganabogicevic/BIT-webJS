var $button = $("#button");
var $input = document.querySelector("#ipAddress");


function getCountry () {
    var request = new XMLHttpRequest();
    var inputValue = $input.value; 
    var url = "http://www.geoplugin.net/xml.gp?ip=" + inputValue;
 
    request.open("GET", url);
    request.send();

    request.onload = function() {
        var response = request.responseXML;
        var country = response.querySelector("geoplugin_countryName");

        $("#showCountry").text(country.textContent);
    }
}

$button.on("click", getCountry);