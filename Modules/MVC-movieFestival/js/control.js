import * as data from "./data.js"
import * as view from "./view.js"

    function addEventListeners () {
        const $createMovieBtn = $("#createMovieBtn");
        $createMovieBtn.on("click", onMovieCreate);

        const $createProgramBtn = $("#createProgramBtn");
        $createProgramBtn.on("click", onProgramCreate);

        const $addMovieToProgramBtn = $("#addMovieBtn");
        $addMovieToProgramBtn.on("click", addMovieToProgram);
    }
    
    function onMovieCreate () {
        const dataFromForm = view.getFormData();
        
       try {
            view.validateMovieFormData (dataFromForm);
            data.createMovie(dataFromForm);
            view.printCreateMovieList(data.getPtintData())
        } catch (error) {
           view.printErrorMessage(error.message) 
        }
    }
    function onProgramCreate () {
        const dateFromInputField = view.getProgramFormData();
        try {
            view.programFormValidation (dateFromInputField);
            data.createProgram(dateFromInputField);
            
            view.printCreateProgramList (data.getProgramPtintData());
            
        } catch (error) {
           view.printProgramErrorMessage(error.message) 
        }
    }
    function addMovieToProgram () {
        const selected = view.defSelected();
        data.addMovieToProgram(selected);
        view.displayCreatedPrograms (selected.selectedProgramId, data.getFinalPrintData());
        
        
    }
    addEventListeners ()
   
