var opWindow = document.getElementById("operation-window");
var types = document.getElementsByClassName("type"),
    typeOne = {type: "", offense: [], defense: [], immunity: []},
    typeTwo = {type: "", offense: [], defense: [], immunity: []};

var bug = {
    offense: [1,2,1,1,.5,.5, .5,.5,.5,2,1,1, 1,.5,2,1,.5,1], 
    defense: [1,1,1,1,1,.5, 2,2,1,.5,.5,1, 1,1,1,2,1,1]},

    dark = {
    offense: [1,.5,1,1,.5,.5, 1,1,2,1,1,1, 1,1,2,1,1,1], 
    defense: [2,.5,1,1,2,2, 1,1,.5,1,1,1, 1,1,0,1,1,1]},

    dragon = {
    offense: [1,1,2,1,0,1, 1,1,1,1,1,1, 1,1,1,1,.5,1], 
    defense: [1,1,2,.5,2,1, .5,1,1,.5,1,2, 1,1,1,1,1,.5]},

    electr = {
    offense: [1,1,.5,.5,1,1, 1,2,1,.5,0,1, 1,1,1,1,1,2], 
    defense: [1,1,1,.5,1,1, 1,.5,1,1,2,1, 1,1,1,1,.5,1]},

    fairy = {
    offense: [1,2,2,1,1,2, .5,1,1,1,1,1, 1,.5,1,1,.5,1], 
    defense: [.5,.5,0,1,1,.5, 1,1,1,1,1,1, 1,2,1,1,2,1]},

    fight = {
    offense: [.5,2,1,1,.5,1, 1,.5,0,1,1,2, 2,.5,.5,2,2,1,],
    defense: [.5,.5,1,1,2,1, 1,2,1,1,1,1, 1,1,2,.5,1,1]},

    fire = {
    offense: [2,1,.5,1,1,1, .5,1,1,2,1,2, 1,1,1,.5,2,.5], 
    defense: [.5,1,1,1,.5,1, .5,1,1,.5,2,.5, 1,1,1,2,.5,2]},

    flying = {
    offense: [2,1,1,.5,1,2, 1,1,1,2,1,1, 1,1,1,.5,.5,1], 
    defense: [.5,1,1,2,1,.5, 1,1,1,.5,0,2, 1,1,1,2,1,1]},

    ghost = {
    offense: [1,.5,1,1,1,1, 1,1,2,1,1,1, 0,1,2,1,1,1], 
    defense: [.5,2,1,1,1,0, 1,1,2,1,1,1, 0,.5,1,1,1,1]},

    grass = {
    offense: [.5,1,.5,1,1,1, .5,.5,1,.5,2,1, 1,.5,1,2,.5,2], 
    defense: [2, 1,1,.5,1,1, 2,2,1,.5,.5,2, 1,2,1,1,1,.5]},

    ground = {
    offense: [.5,1,1,2,1,1, 2,0,1,.5,1,1, 1,2,1,2,2,1], 
    defense: [1,1,1,0,1,1, 1,1,1,2,1,2, 1,.5,1,.5,1,2]},

    ice = {
    offense: [1,1,2,1,1,1, .5,2,1,2,2,.5, 1,1,1,1,.5,.5], 
    defense: [1,1,1,1,1,2, 2,1,1,1,1,.5, 1,1,1,2,2,1]},

    normal = {
    offense: [1,1,1,1,1,1, 1,1,0,1,1,1, 1,1,1,.5,.5,1], 
    defense: [1,1,1,1,1,2, 1,1,0,1,1,1, 1,1,1,1,1,1]},

    poison = {
    offense: [1,1,1,1,2,1, 1,1,.5,2,.5,1, 1,.5,1,.5,0,1], 
    defense: [.5,1,1,1,.5,.5, 1,1,1,.5,2,1, 1,.5,2,1,1,1]},

    psychc = {
    offense: [1,0,1,1,1,2, 1,1,1,1,1,1, 1,2,.5,1,.5,1], 
    defense: [2,2,1,1,1,.5, 1,1,2,1,1,1, 1,1,.5,1,1,1]},

    rock = {
    offense: [2,1,1,1,1,.5, 2,2,1,1,.5,2, 1,1,1,1,.5,1], 
    defense: [1,1,1,1,1,2, .5,.5,1,2,2,1, .5,.5,1,1,2,2]},

    steel = {
    offense: [1,1,1,.5,2,1, .5,1,1,1,1,2, 1,1,1,2,.5,.5], 
    defense: [.5,1,.5,1,.5,2, 2,.5,1,.5,2,.5, .5,0,.5,.5,.5,1]},

    water = {
    offense: [1,1,.5,1,1,1, 2,1,1,.5,2,1, 1,1,1,2,1,.5], 
    defense: [1,1,1,2,1,1, .5,1,1,2,1,.5, 1,1,1,1,.5,.5]};


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
    var temp = (el.target.innerHTML.toLowerCase());

    if (document.getElementById("start")) {deleteStartMsg()}

    if (typeTwo.type) {
        clear();
    }
    else if (typeOne.type && !typeTwo.type) {
        if (typeOne.type == temp) {
            return;
        }
        typeTwo.type = temp;
        typeTwo.offense = eval(typeTwo.type).offense;
        typeTwo.defense = eval(typeTwo.type).defense;
        console.log(typeTwo);
        displayOperation(typeTwo.type);
        return;
    }
    typeOne.type = temp;
    typeOne.offense = eval(typeOne.type).offense;
    typeOne.defense = eval(typeOne.type).defense;
    displayOperation(typeOne.type);
    displayTypeOne(typeOne);
}


/* --- type click listener --- */

Array.from(types).forEach(function(el) {
    el.addEventListener("click", click)
})


/* --- resets --- */

function clear() {
    if (document.getElementById("start")) {deleteStartMsg()};
    opWindow.innerHTML = "";
    typeOne.type = "";
    typeTwo.type = "";
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


/* --- return name of type in offense,defense arrays --- */

function returnTypeName(i) {
    switch (i) {
        case 0:
            return 'bug';
        case 1:
            return 'dark';
        case 2:
            return 'dragon';
        case 3:
            return 'electr';
        case 4:
            return 'fairy';
        case 5:
            return 'fight';
        case 6:
            return 'fire';
        case 7:
            return 'flying';
        case 8:
            return 'ghost';
        case 9:
            return 'grass';
        case 10:
            return 'ground';
        case 11:
            return 'ice';
        case 12:
            return 'normal';
        case 13:
            return 'poison';
        case 14:
            return 'psychc';
        case 15:
            return 'rock';
        case 16:
            return 'steel';
        case 17:
            return 'water';
    }
}

function displayTypeOne(obj) {
    var superTo = [],
        halfFrom = [],
        zeroFrom = [],
        superFrom = [],
        halfTo = [],
        zeroTo = [];
    
    for (var i = 0; i < 18; i++) {
        if (obj.offense[i] == 2) {
            superTo.push(returnTypeName(i));
        }
        if (obj.offense[i] == .5) {
            halfTo.push(returnTypeName(i));
        }
        if (obj.offense[i] == 0) {
            zeroTo.push(returnTypeName(i));
        }
        if (obj.defense[i] == 2) {
            superFrom.push(returnTypeName(i));
        }
        if (obj.defense[i] == .5) {
            halfFrom.push(returnTypeName(i));
        }
        if (obj.defense[i] == 0) {
            zeroFrom.push(returnTypeName(i));
        }
    }

    if (superTo) {
        opWindow.appendChild("<div id='super-to'></div>")
        sup = document.getElementById("super-to");

        superTo.forEach(function(el) {
            sup.appendChild("<div class=" + el + " type>" + el.toUpperCase() + "</div>");
        })
    }

    if (halfFrom) {
        opWindow.appendChild("<div id='half-from'></div>")
        half = document.getElementById("half-from");

        superTo.forEach(function(el) {
            sup.appendChild("<div class=" + el + " type>" + el.toUpperCase() + "</div>");
        })
    }


}