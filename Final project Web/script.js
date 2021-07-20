var divForOverView = $("#forShowShows");
var errorElement = $(".alert");
var divForShowPage = $("#containerForShowPage");
var inputSearch = $("input");
var showList = [];
var divForSearchOptiones = $("#listOfSearchedShows");


$(document).ready(function () {
    showShows();
    
})



function showShows() {
$.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET"
}).done(function (response) {
    divForOverView.html("");
    
    if (response.length == 0) {
        errorElement.text("No results");
        return;
    }
    response.length = 50;
    response.forEach(function (item) {
        var show = $(`<div class='col-md-4'><div class= 'show' data-id= '${item.id}'><a href='showInfoPage.html' target='_blank'><img src='${item.image.medium}'></a>
        <h5 class='show-title mt-2 mb-5'>${item.name}</h5>
        </div>
        </div>`);
        divForOverView.append(show);
       
    })
   
    
    $(".show").click(function() {
        var selectedShow;
        var idOfSelectedShow = $(this).attr("data-id");

        for(var i = 0; i<response.length; i++) {
            var current = response[i];
            if(parseInt(idOfSelectedShow) === current.id) {
                selectedShow = current;
                
            } 
        }
        var obj = { Name: selectedShow.name, Img: selectedShow.image.original, Description: selectedShow.summary, Id: selectedShow.id};
        localStorage.setItem("selectedShow", JSON.stringify(obj));
        return selectedShow;
        
    });


 
}).fail(function () {
    errorElement.text("Network error!");
    errorElement.toggle();
})
}

function searchShows(inputVal) {
    var url = "http://api.tvmaze.com/search/shows?q="
    $.ajax({
        url: `${url}${inputVal}`,
        method: "GET"
    }).done(function (response) {
        divForOverView.html("");
        
        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
        function imageOK (image) {
            if(!image) {
                return "photo.png";
            } else {
                return image.medium;
            }
        }
       
        response.forEach(function (item) {
            var option = $(`<div class='col-md-4'><div class= 'show' data-id= '${item.show.id}'><a href='showInfoPage.html' target='_blank'><img src='${imageOK(item.show.image)}'></a>
            <h5 class='show-title mt-2 mb-5'>${item.show.name}</h5>
            </div>
            </div>`);
            divForOverView.append(option);
            showList.push(item);
            
           
        })
        
        $(".show").click(function() {
            var selectedShow;
            var idOfSelectedShow = $(this).attr("data-id");
    
            for(var i = 0; i<response.length; i++) {
                var current = response[i];
                if(parseInt(idOfSelectedShow) === current.show.id) {
                    selectedShow = current;
                } 
            }
            var obj = { Name: selectedShow.show.name, Img: selectedShow.show.image.original, Description: selectedShow.show.summary, Id: selectedShow.show.id};
            localStorage.setItem("selectedShow", JSON.stringify(obj));
            return selectedShow;
            
        });
        
        for(var i = 0; i<showList.length; i++) {
               
            divForSearchOptiones.append(`<div><a class='linkFromDropDown' data-id= '${showList[i].show.id}' href='showInfoPage.html' target='_blank'>${showList[i].show.name}</a></div>`);
            
        }
        
        
       
        $("a").click(function() {
            var selectedShow;
            var idOfSelectedShow = $(this).attr("data-id");
    
            for(var i = 0; i<response.length; i++) {
                var current = response[i];
                if(parseInt(idOfSelectedShow) === current.show.id) {
                    selectedShow = current;
                } 
            }
            var obj = { Name: selectedShow.show.name, Img: selectedShow.show.image.original, Description: selectedShow.show.summary, Id: selectedShow.show.id};
            localStorage.setItem("selectedShow", JSON.stringify(obj));
            return selectedShow;
            
        });
}).fail(function () {
    errorElement.text("Network error!");
    errorElement.toggle();
})
}

function searchHandler(event) {
    if (event.keyCode == 13) {
        var inputVal = inputSearch.val();
        inputSearch.blur();
        if (!inputVal) {
            errorElement.text("Input is required");
            errorElement.toggle();
            return;
        }
        
        
        searchShows(inputVal);
        
    }
}


    


function clearInput() {
    divForSearchOptiones.html("");
    inputSearch.val("");
    errorElement.text("");        
    errorElement.css("display", "none");
}
inputSearch.on("keydown", searchHandler);

inputSearch.on("focus", clearInput);
inputSearch.on("dblclick", function() {
    location.reload();
})
    

var selectedShow = JSON.parse(localStorage.getItem("selectedShow"));

divForShowPage.append("<h1 class= 'text-center'>" + selectedShow.Name + "</h1><div id= 'divWithImg' class= 'col-md-6 m-3'><img class= 'img-thumbnail m-3'id= 'showPhoto' src=" + selectedShow.Img +"></div><div class= 'col-md-5'><div class= 'row'><div id= 'forSeasons' class= 'col-10 mt-5 fs-3'></div><div id= 'forCast' class= 'col-10 mt-5 fs-3 '></div></div></div><div class= 'row'><div class= 'col-12 text-left'><h3 class= 'm-3'>Show Details</h3><p>" + selectedShow.Description + "</p></div></div></div><div class= 'row'><div class= 'col-md-5' id='forCrew'></div><div class= 'col-md-4' id='forAka'></div><div class= 'col-md-3' id='forEpisode'></div></div>" );
localStorage.removeItem("selectedShow");

var url = "http://api.tvmaze.com/shows/";
var id = selectedShow.Id;
var restOfUrl = "/seasons";
var fullUrlForSeasons = url + id + restOfUrl;
var divForSeasons = $("#forSeasons");

function getSeasons() {
    $.ajax({
        url: fullUrlForSeasons,
        method: "GET"
    }).done(function (response) {
        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
   
        var numberOfSeasons = $(`<div class='col-md-4'><h3>Season(${response.length})</h3><ul>`);
        divForSeasons.append(numberOfSeasons);

        response.forEach(function (item) {
            var seasons = $(`<li class='fs-5'>${item.premiereDate} - ${item.endDate}</li>`);
            divForSeasons.append(seasons);
            divForSeasons.append("</ul></div>");
        })
    }).fail(function () {
        errorElement.text("Network error!");
        errorElement.toggle();
    })
    }

getSeasons()

var urlCast = "http://api.tvmaze.com/shows/";
var restOfUrlCast = "/cast";
var fullUrlForCast = urlCast + id + restOfUrlCast;


var divForCast = $("#forCast");

function getCast() {
    $.ajax({
        url: fullUrlForCast,
        method: "GET"
    }).done(function (response) {
       

        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
  
        var castTitle = $(`<div class='col-md-4' mt-3><h3>Cast</h3></div><ul>`);
        divForCast.append(castTitle);

        response.length = 10;
        console.log(response)

        response.forEach(function (item) {

            var casts = $(`<li class='fs-5'>${item.person.name}</li>`);
           
           
            divForCast.append(casts);
            divForCast.append("</ul></div>");
               
        })

    
    }).fail(function () {
        errorElement.text("Network error!");
        errorElement.toggle();
    })
    }

getCast()


var urlCrew = "http://api.tvmaze.com/shows/";
var restOfUrlCrew = "/crew";
var fullUrlForCrew = urlCrew + id + restOfUrlCrew;


var divForCrew = $("#forCrew");

function getCrew() {
    $.ajax({
        url: fullUrlForCrew,
        method: "GET"
    }).done(function (response) {
       

        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
  
        var crewTitle = $(`<div class='col-md-4 m-3'><h3>Crew</h3></div>`);
        divForCrew.append(crewTitle);

        response.length = 10;
        console.log(response)

        response.forEach(function (item) {

            var crew = $(`<li class='fs-5 m-3'>${item.type} : ${item.person.name}</li>`);
           
           
            divForCrew.append(crew);
               
        })

    
    }).fail(function () {
        errorElement.text("Network error!");
        errorElement.toggle();
    })
    }
    getCrew();

var urlAka = "http://api.tvmaze.com/shows/";
var restOfUrlAka = "/akas";
var fullUrlForAka = urlAka + id + restOfUrlAka;


var divForAka = $("#forAka");

function getAka() {
    $.ajax({
        url: fullUrlForAka,
        method: "GET"
    }).done(function (response) {
       

        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
  
        var akaTitle = $(`<div class='col-md-4 m-3'><h3>Aka\'s</h3></div>`);
        divForAka.append(akaTitle);

        
        console.log(response)

        response.forEach(function (item) {

            var aka = $(`<li class='fs-5 m-3'>${item.country.name} : ${item.name}</li>`);
           
           
            divForAka.append(aka);
               
        })

    
    }).fail(function () {
        errorElement.text("Network error!");
        errorElement.toggle();
    })
    }
    getAka();

    var urlEpisode = "http://api.tvmaze.com/shows/";
    var restOfUrlEpisode = "/episodes";
    var fullUrlForEpisode = urlEpisode + id + restOfUrlEpisode;
    
    
    var divForEpisode = $("#forEpisode");
    
    function getEpisode() {
        $.ajax({
            url: fullUrlForEpisode,
            method: "GET"
        }).done(function (response) {
           
    
            if (response.length == 0) {
                errorElement.text("No results");
                return;
            }
      
            var episodeTitle = $(`<div class='col-md-2 m-3'><h3>Episodes</h3></div>`);
            divForEpisode.append(episodeTitle);
    
            
            console.log(response)
    
            response.forEach(function (item) {
    
                var episode = $(`<li class='fs-5 m-3'><a href=${item.url}>${item.name}</a></li>`);
               
               
                divForEpisode.append(episode);
                   
            })
    
        
        }).fail(function () {
            errorElement.text("Network error!");
            errorElement.toggle();
        })
        }
        getEpisode();
    

       