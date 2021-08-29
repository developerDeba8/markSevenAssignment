var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var textOutputDiv = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/pirate.json";
                


function errorHandler(error){
    console.log("Error occured: ", error);
}

function constructPirateTranslateURL(text){
    return serverURL + "?" + "text=" + text;
}

function translateBtnClickHandler(){
    fetch(constructPirateTranslateURL(textInput.value))
    .then(response => response.json())
    .then(json => {
        textOutputDiv.innerText = json.contents.translated})
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", translateBtnClickHandler);