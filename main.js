var opWindow = document.getElementById("operation-window");
var types = document.getElementsByClassName("type");


/* --- search modal display --- */

document.getElementById("search-field").addEventListener("focus", darken);
document.getElementById("search-field").addEventListener("blur", lighten);

function darken() {
    document.getElementById("results-container").style.display = "block";
}
function lighten() {
    document.getElementById("results-container").style.display = "none";
}


/* --- display types in operation window --- */

function displayOperation(str) {
    var newType = document.createElement("div");
    newType.classList.add(str, "type");
    newType.appendChild(document.createTextNode(str.toUpperCase()));
    opWindow.appendChild(newType);
    
    updateTypes();
}


/* --- on type click --- */

function click(el) {
    clear();

    displayOperation(el.target.innerHTML.toLowerCase());
}


/* --- type click listener --- */

Array.from(types).forEach(function(el) {
    el.addEventListener("click", click)
})


/* --- resets --- */

function clear() {
    if (document.getElementById("start")) {deleteStartMsg()};
}

function deleteStartMsg() {
    var el = document.getElementById("start");
    el.parentElement.removeChild(el);
}


/* --- update types object with added elements --- */

function updateTypes() {
    Array.from(types).forEach(function(el) {
        el.removeEventListener("click", click)
    })

    types = document.getElementsByClassName("type");

    Array.from(types).forEach(function(el) {
        el.addEventListener("click", click)
    })
}

