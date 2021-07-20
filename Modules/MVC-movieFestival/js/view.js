
const $movieTitle = $("#title");
const $movieLenght = $("#lenght");
const $movieGenre = $("#selectGenre");
const $movieList = $("#movieList");
const $dateOfProgram = document.querySelector("#date")
const $movieSelectList = $("#selectMovie");
const $programList = $("#programList")
const $programSelectList = $("#selectProgram");
const $errorMovieDisplay = $("#paragrafForMovieError");
const $errorProgramDisplay = $("#paragrafForProgramError");


function getFormData () {
    return {
        titleValue : $movieTitle.val(),
        lenghtValue : parseInt($movieLenght.val()),
        genreValue : $movieGenre.val()
    }
}

function validateMovieFormData (data) {
    Object.keys(data).forEach(function(key) {
        if(!data[key]) {
            let requiredField = key.charAt(0).toUpperCase() + key.substr(1, key.length);
            throw new Error (`${requiredField} is required!`); 
        } else if(data.lenghtValue < 0) {
            throw new Error ("Lenght of movie must be positiv number."); 
        }
    })
    
}

function printErrorMessage (message) {
    resetError();
    $errorMovieDisplay.html(message);
}

function resetError () {
    $errorMovieDisplay.empty();
}
     
function resetMovieForm () {
    $movieTitle.val(""); 
    $movieLenght.val("");
}    

function printCreateMovieList (createdMoviesList) {
    resetMovieForm();
    resetError();
    $movieList.html("");
    $movieSelectList.html("");

    createdMoviesList.forEach(function (movie) {
        $movieList.append(`<li data-id = ${movie.id}>${movie.printData}</li>`);
        $movieSelectList.append(`<option class='movieOptions' data-id = ${movie.id}>${movie.printData}</option>`);

        
    })

}
function getProgramFormData () {
    const dateValue = $dateOfProgram.value;
    const date = dateValue.split("-");
    console.log(dateValue)
  

    return {
    dateValue : dateValue,
    year : parseInt(date[0]),
    month : parseInt(date[1]),
    day : parseInt(date[2])
}
}
    
function programFormValidation (date) {
    if(!date.dateValue) {
        throw new Error ("Date is required!"); 
    } 
}  

function printProgramErrorMessage (message) {
    resetError2();
    resetProgramForm (); 
    $errorProgramDisplay.append(message);
}

function resetError2 () {
    $errorProgramDisplay.empty();
}    

function resetProgramForm () {
    $dateOfProgram.value = "";
}  

function printCreateProgramList (createdProgramList) {
    resetProgramForm();
    resetError2();
    $programSelectList.html("");
    createdProgramList.forEach(function (program) {
        $programSelectList.append(`<option class='programOptions' data-id=${program.id}>${program.printData}</option>`);    
    })

}
    
function defSelected () {
    const selectedMovie = $( "select option.movieOptions:selected" );
    console.log(selectedMovie)
    const selectedProgram = $( "select option.programOptions:selected" );
    return {
        selectedMovieId : parseInt($(selectedMovie).attr("data-id")),
        selectedProgramId : parseInt($(selectedProgram).attr("data-id"))
    }
}    
    
   
function displayCreatedPrograms (selectedProgramId, prog) {    

        prog.forEach(function (program) {
            if(selectedProgramId === program.id){
                const listOfProgramsWithMovies = $(".listOfFinPrograms");
                for(let i = 0; i<listOfProgramsWithMovies.length; i++) {
                    let currentLi = $(listOfProgramsWithMovies[i]);
                    if(parseInt(currentLi.attr("data-id")) === selectedProgramId) {
                        currentLi.remove();
                    } 
                }
                $programList.append(`<li class='listOfFinPrograms' data-id=${program.id}>${program.printData}</li>`);
            }    
        })
    

}

export {
    getFormData,
    validateMovieFormData,
    printErrorMessage,
    resetMovieForm,
    printCreateMovieList,
    getProgramFormData, 
    programFormValidation,
    printCreateProgramList,
    printProgramErrorMessage,
    defSelected,
    displayCreatedPrograms
}


