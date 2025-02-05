// ! Initialise HTML

let root =  document.querySelector("#root");

let header = document.createElement("header");
header.classList.add("header")

let main = document.createElement("main");

let footer = document.createElement("footer");



root.append(header, main, footer);

function highLightText(sourceTxt, highLightTxt) {
    return sourceTxt.replace(highLightTxt, `<span class=highlight__text>${highLightTxt}</span>`)
}

