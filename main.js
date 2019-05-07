alert("welcome Mr.Ahmed")

function changeBold() {
    document.getElementById("text").style.fontWeight = "bold";
}

function changItalic() {
    document.getElementById("text").style.fontStyle = "Italic";
}

function changeUnderlined() {
    document.getElementById("text").style.textDecoration = "underline";
}

function changeSize(event) {
    document.getElementById("text").style.fontSize = event.value;
}

function changeFont (selectTag) {
    
    var whichSelected = selectTag.selectedIndex;
   
    var selectState = selectTag.options[whichSelected].text;

    var fontTest = document.getElementById ("text");
    fontTest.style.fontFamily = selectState;
}


