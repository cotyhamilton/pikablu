var opWindow = document.getElementById("operation-window");
var focal = document.getElementById("focal");
var ops = document.getElementById("operations");
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
    focal.appendChild(newType);
    
    updateTypes();
    displayClearButton();
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
    displayClearButton();
    console.log("tried");

}

/* --- display clear button on type click --- */

function displayClearButton() {
    document.getElementById("clear").style.display = "block";
}

/* --- clear button click listener --- */

document.getElementById("clear").addEventListener("click",clear);


/* --- type click listener --- */

Array.from(types).forEach(function(el) {
    el.addEventListener("click", click)
})


/* --- resets --- */

function clear() {
    if (document.getElementById("start")) {deleteStartMsg()};
    document.getElementById("clear").style.display = "none";
    focal.innerHTML = "";
    ops.innerHTML = "";
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
        st = document.createElement("div");
        st.id = "super-to";
        st.className = "max-w flexbox";
        ops.appendChild(st);
        supTo = document.getElementById("super-to");
        supTo.innerHTML = "<p>2X DAMAGE TO</p>";

        superTo.forEach(function(el) {
            stc = document.createElement("div");
            stc.className = el;
            stc.className += " type";
            stc.innerHTML = el.toUpperCase();
            supTo.appendChild(stc);
        })
    }

    if (halfFrom) {
        hf = document.createElement("div");
        hf.id = "half-from";
        hf.className = "max-w flexbox";
        ops.appendChild(hf)
        hafFr = document.getElementById("half-from");
        hafFr.innerHTML = "<p>1/2X DAMAGE FROM</p>";

        halfFrom.forEach(function(el) {
            hfc = document.createElement("div");
            hfc.className = el;
            hfc.className += " type";
            hfc.innerHTML = el.toUpperCase();
            hafFr.appendChild(hfc);
        })
    }

    if (zeroFrom) {
        zf = document.createElement("div");
        zf.id = "zero-from";
        zf.className = "max-w flexbox";
        ops.appendChild(zf)
        zerFr = document.getElementById("zero-from");
        zerFr.innerHTML = "<p>IMMUNE TO</p>";

        zeroFrom.forEach(function(el) {
            zfc = document.createElement("div");
            zfc.className = el;
            zfc.className += " type";
            zfc.innerHTML = el.toUpperCase();
            zerFr.appendChild(zfc);
        })
    }


    if (superFrom) {
        sf = document.createElement("div");
        sf.id = "super-from";
        sf.className = "max-w flexbox";
        ops.appendChild(sf)
        supFr = document.getElementById("super-from");
        supFr.innerHTML = "<p>2X DAMAGE FROM</p>";

        superFrom.forEach(function(el) {
            sfc = document.createElement("div");
            sfc.className = el;
            sfc.className += " type";
            sfc.innerHTML = el.toUpperCase();
            supFr.appendChild(sfc);
        })
    }

    if (halfTo) {
        ht = document.createElement("div");
        ht.id = "half-to";
        ht.className = "max-w flexbox";
        ops.appendChild(ht)
        hafTo = document.getElementById("half-to");
        hafTo.innerHTML = "<p>1/2X DAMAGE TO</p>";

        halfTo.forEach(function(el) {
            htc = document.createElement("div");
            htc.className = el;
            htc.className += " type";
            htc.innerHTML = el.toUpperCase();
            hafTo.appendChild(htc);
        })
    }

    if (zeroTo) {
        zt = document.createElement("div");
        zt.id = "zero-to";
        zt.className = "max-w flexbox";
        ops.appendChild(zt)
        zerTo = document.getElementById("zero-to");
        zerTo.innerHTML = "<p>CAN'T DAMAGE</p>";

        zeroTo.forEach(function(el) {
            ztc = document.createElement("div");
            ztc.className = el;
            ztc.className += " type";
            ztc.innerHTML = el.toUpperCase();
            zerTo.appendChild(ztc);
        })
    }
}