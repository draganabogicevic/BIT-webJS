
let dataStorage = {
    createdMoviesList : [], 
    createdProgramList : []
    
}    
console.log(dataStorage.createdProgramList)

function Movie (title, lengthMin , genre) {
    this.id = this.generateMovieId();
    this.title = title;
    this.lengthMin = lengthMin;
    this.genre = genre;//da li ovde moze samo this.genre?
}
function Program(year, month, date) {
    this.id = this.generateProgramId();
    this.date = new Date(year, month, date);
    this.listOfMoviesInProgram = [];
    
}

console.log(dataStorage.createdProgramList)

Movie.prototype.generateMovieId = function() {
    return Math.floor(Math.random()*100);
}
Movie.prototype.getMovieId = function () {
    return this.id;
}
Movie.prototype.getGenre =  function () {
    const firstLetter = this.genre.charAt(0).toUpperCase();
    const lastLetter = this.genre.charAt(this.genre.length-1).toUpperCase();
    return  firstLetter + lastLetter; 
}
Movie.prototype.getData = function() {
    return `${this.title},&nbsp${this.lengthMin}&nbspmin,&nbsp${this.getGenre()}`;
}
Program.prototype.generateProgramId = function() {
    return Math.floor(Math.random()*100);
}
Program.prototype.formatedDate = function() {
    return `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`;
}
Program.prototype.addMovie = function(movie) {
    this.listOfMoviesInProgram.push(movie);
}
console.log(dataStorage.createdProgramList)
Program.prototype.getData = function() {
    let totalProgramDuration = 0;
    for(let i = 0; i < this.listOfMoviesInProgram.length; i++) {
        let current = this.listOfMoviesInProgram[i];
        totalProgramDuration += current.lengthMin;
    }
   
    return `${this.formatedDate()}, ${this.listOfMoviesInProgram.length} movies,&nbsp${totalProgramDuration}&nbspmin`; 
}
console.log(dataStorage.createdProgramList)
function createMovie (data) {
    const newMovie = new Movie (data.titleValue, data.lenghtValue, data.genreValue); 
    dataStorage.createdMoviesList.push(newMovie);
    
}


function getPtintData () {
    console.log(dataStorage.createdMoviesList)
    const printData = dataStorage.createdMoviesList.map(function(movie){
        
        return {
            printData: movie.getData(), 
            id: movie.id
        }
    })
    
    return printData;
}


function createProgram (data) {
    const newProgram = new Program(data.year, data.month, data.day);
    dataStorage.createdProgramList.push(newProgram);
    console.log(newProgram)
}

function getProgramPtintData () {
    const printData = dataStorage.createdProgramList.map(function(program){//let ili const?
        return {
            printData: program.formatedDate(), 
            id: program.id
        }
    })
    return printData;
}
console.log(dataStorage.createdProgramList)
function addMovieToProgram (params) {
    var movieToAdd;
    var programForAdding;
   
    
    for(let i = 0; i<dataStorage.createdMoviesList.length; i++) {
        console.log(dataStorage.createdMoviesList)
        let currentMovie = dataStorage.createdMoviesList[i];
        let idOfCurrentMovie = currentMovie.id;
        if(idOfCurrentMovie === params.selectedMovieId) {
            movieToAdd = currentMovie;
        }
    }
    console.log(dataStorage.createdProgramList)
    for(let i = 0; i<dataStorage.createdProgramList.length; i++) {
        let currentProgram = dataStorage.createdProgramList[i];
        let idOfCurrentProgram = currentProgram.id;
        console.log(currentProgram)
        if(idOfCurrentProgram === params.selectedProgramId) {
            programForAdding = currentProgram;
        }
    }
    programForAdding.addMovie(movieToAdd);
    console.log(dataStorage.createdProgramList)
}

function getFinalPrintData () {
    const printData = dataStorage.createdProgramList.map(function(program){
        return {
            printData: program.getData(), 
            id: program.id
        }
    })
    return printData;
}


export {
    createMovie, 
    getPtintData,
    createProgram,
    getProgramPtintData,
    addMovieToProgram,
    getFinalPrintData 
}




