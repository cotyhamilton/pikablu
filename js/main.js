$(document).ready(function() {
    var typeOne,
        oneObj,
        typeTwo,
        twoObj,
        bug = {}, dark = {}, dragon = {},
        electr = {},fairy = {}, fight = {},
        fire = {}, flying = {}, ghost = {}, 
        grass = {}, ground = {}, ice = {},
        normal = {}, poison = {}, psychc = {},
        rock = {}, steel = {}, water = {};
    /*
    offense: nX damage to, 0 = can't damage
    defense: nX damage from, 0 = immune
    
    BUG,DARK,DRAGON,ELECTR,FAIRY,FIGHT,
    FIRE,FLYING,GHOST,GRASS,GROUND,ICE,
    NORMAL,POISON,PSYCHC,ROCK,STEEL,WATER
    
    */
    bug.offense = [1,2,1,1,.5,.5, .5,.5,.5,2,1,1, 1,.5,2,1,.5,1];
    bug.defense = [1,1,1,1,1,.5, 2,2,1,.5,.5,1, 1,1,1,2,1,1];
    
    dark.offense = [1,.5,1,1,.5,.5, 1,1,2,1,1,1, 1,1,2,1,1,1];
    dark.defense = [2,.5,1,1,2,2, 1,1,.5,1,1,1, 1,1,0,1,1,1];
    
    dragon.offense = [1,1,2,1,0,1, 1,1,1,1,1,1, 1,1,1,1,.5,1];
    dragon.defense = [1,1,2,.5,2,1, .5,1,1,.5,1,2, 1,1,1,1,1,.5];
    
    electr.offense = [1,1,.5,.5,1,1, 1,2,1,.5,0,1, 1,1,1,1,1,2];
    electr.defense = [1,1,1,.5,1,1, 1,.5,1,1,2,1, 1,1,1,1,.5,1];
    
    fairy.offense = [1,2,2,1,1,2, .5,1,1,1,1,1, 1,.5,1,1,.5,1];
    fairy.defense = [.5,.5,0,1,1,.5, 1,1,1,1,1,1, 1,2,1,1,2,1];
    
    fight.offense = [.5,2,1,1,.5,1, 1,.5,0,1,1,2, 2,.5,.5,2,2,1];
    fight.defense = [.5,.5,1,1,2,1, 1,2,1,1,1,1, 1,1,2,.5,1,1];
    
    fire.offense = [2,1,.5,1,1,1, .5,1,1,2,1,2, 1,1,1,.5,2,.5];
    fire.defense = [.5,1,1,1,.5,1, .5,1,1,.5,2,.5, 1,1,1,2,.5,2];
    
    flying.offense = [2,1,1,.5,1,2, 1,1,1,2,1,1, 1,1,1,.5,.5,1];
    flying.defense = [.5,1,1,2,1,.5, 1,1,1,.5,0,2, 1,1,1,2,1,1];
    
    ghost.offense = [1,.5,1,1,1,1, 1,1,2,1,1,1, 0,1,2,1,1,1];
    ghost.defense = [.5,2,1,1,1,0, 1,1,2,1,1,1, 0,.5,1,1,1,1];
    
    grass.offense = [.5,1,.5,1,1,1, .5,.5,1,.5,2,1, 1,.5,1,2,.5,2];
    grass.defense = [2, 1,1,.5,1,1, 2,2,1,.5,.5,2, 1,2,1,1,1,.5];
    
    ground.offense = [.5,1,1,2,1,1, 2,0,1,.5,1,1, 1,2,1,2,2];
    ground.defense = [1,1,1,0,1,1, 1,1,1,2,1,2, 1,.5,1,.5,1,2];
    
    ice.offense = [1,1,2,1,1,1, .5,2,1,2,2,.5, 1,1,1,1,.5,.5];
    ice.defense = [1,1,1,1,1,2, 2,1,1,1,1,.5, 1,1,1,2,2,1];
    
    normal.offense = [1,1,1,1,1,1, 1,1,0,1,1,1, 1,1,1,.5,.5,1];
    normal.defense = [1,1,1,1,1,2, 1,1,0,1,1,1, 1,1,1,1,1,1];
    
    poison.offense = [1,1,1,1,2,1, 1,1,.5,2,.5,1, 1,.5,1,.5,0,1];
    poison.defense = [.5,1,1,1,.5,.5, 1,1,1,.5,2,1, 1,.5,2,1,1,1];
    
    psychc.offense = [1,0,1,1,1,2, 1,1,1,1,1,1, 1,2,.5,1,.5,1];
    psychc.defense = [2,2,1,1,1,.5, 1,1,2,1,1,1, 1,1,.5,1,1,1];
    
    rock.offense = [2,1,1,1,1,.5, 2,2,1,1,.5,2, 1,1,1,1,.5,1];
    rock.defense = [1,1,1,1,1,2, .5,.5,1,2,2,1, .5,.5,1,1,2,2];
    
    steel.offense = [1,1,1,.5,2,1, .5,1,1,1,1,2, 1,1,1,2,.5,.5];
    steel.defense = [.5,1,.5,1,.5,2, 2,.5,1,.5,2,.5, .5,0,.5,.5,.5,1];
    
    water.offense = [1,1,.5,1,1,1, 2,1,1,.5,2,1, 1,1,1,2,1,.5];
    water.defense = [1,1,1,2,1,1, .5,1,1,2,1,.5, 1,1,1,1,.5,.5];
    
    function emptyHeadings() {
        $('.sub-one, .sub-two, .sub-three, .sub-four, .sub-five, .sub-six, .head-one, .head-two, .head-three, .head-four, .head-five, .head-six').empty();
    }
    
    function fillOneTypeHead() {
        $('.head-one').text("2X DAMAGE TO");
        $('.head-two').text("1/2 DAMAGE FROM");
        $('.head-four').text("2X DAMAGE FROM");
        $('.head-five').text("1/2 DAMAGE TO");
    }
    
    function fillTwoTypeHead() {
        $('.head-one').text("1/4 DAMAGE FROM");
        $('.head-two').text("1/2 DAMAGE FROM");
        $('.head-four').text("2X DAMAGE FROM");
        $('.head-five').text("4X DAMAGE FROM");
    }
    
    function returnTypeName(i) {
        switch (i) {
            case 0:
                return 'BUG';
            case 1:
                return 'DARK';
            case 2:
                return 'DRAGON';
            case 3:
                return 'ELECTR';
            case 4:
                return 'FAIRY';
            case 5:
                return 'FIGHT';
            case 6:
                return 'FIRE';
            case 7:
                return 'FLYING';
            case 8:
                return 'GHOST';
            case 9:
                return 'GRASS';
            case 10:
                return 'GROUND';
            case 11:
                return 'ICE';
            case 12:
                return 'NORMAL';
            case 13:
                return 'POISON';
            case 14:
                return 'PSYCHC';
            case 15:
                return 'ROCK';
            case 16:
                return 'STEEL';
            case 17:
                return 'WATER';
        }
    }
    
    function defense(firstType, secondType) {
        var newDefense = [],
            quarterWeak = [],
            halfWeak = [],
            doubleWeak = [],
            quadWeak = [],
            immun = [];
        
        for (var i = 0; i < 18; i++) {
            newDefense.push(firstType.defense[i] * secondType.defense[i]);
            
            if (newDefense[i] == .25) {
                quarterWeak.push(returnTypeName(i));
            }
            else if (newDefense[i] == .5) {
                halfWeak.push(returnTypeName(i));
            }
            else if (newDefense[i] == 0) {
                immun.push(returnTypeName(i));
            }
            else if (newDefense[i] == 2) {
                doubleWeak.push(returnTypeName(i));
            }
            else if (newDefense[i] == 4) {
                quadWeak.push(returnTypeName(i));
            }
        }
        
        fillTwoTypeHead();
        
        
        for (var i = 0; i < quarterWeak.length; i++) {
            $('.sub-one').append('<div class="'+quarterWeak[i]+' type">'+quarterWeak[i]+'</div>')
        }
        
        for (var i = 0; i < halfWeak.length; i++) {
            $('.sub-two').append('<div class="'+halfWeak[i]+' type">'+halfWeak[i]+'</div>')
        }
        
        for (var i = 0; i < immun.length; i++) {
            $('.sub-three').append('<div class="'+immun[i]+' type">'+immun[i]+'</div>')
        }
        
        for (var i = 0; i < doubleWeak.length; i++) {
            $('.sub-four').append('<div class="'+doubleWeak[i]+' type">'+doubleWeak[i]+'</div>')
        }
        for (var i = 0; i < quadWeak.length; i++) {
            $('.sub-five').append('<div class="'+quadWeak[i]+' type">'+quadWeak[i]+'</div>')
        }
    }
    
    function displayTypeOne(str, obj) {
        var superTo = [],
            halfFrom = [],
            zeroFrom = [],
            superFrom = [],
            halfTo = [],
            zeroTo = [];
        
        $('.type1').toggleClass(str);
        $('.type1').text(str);
        
        emptyHeadings();
        
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
        
        fillOneTypeHead();
        
        for (var i = 0; i < superTo.length; i++) {
            $('.sub-one').append('<div class="'+superTo[i]+' type">'+superTo[i]+'</div>')
        }
        
        for (var i = 0; i < halfFrom.length; i++) {
            $('.sub-two').append('<div class="'+halfFrom[i]+' type">'+halfFrom[i]+'</div>')
        }
        
        for (var i = 0; i < zeroFrom.length; i++) {
            $('.sub-three').append('<div class="'+zeroFrom[i]+' type">'+zeroFrom[i]+'</div>')
        }
        
        for (var i = 0; i < superFrom.length; i++) {
            $('.sub-four').append('<div class="'+superFrom[i]+' type">'+superFrom[i]+'</div>')
        }
        for (var i = 0; i < halfTo.length; i++) {
            $('.sub-five').append('<div class="'+halfTo[i]+' type">'+halfTo[i]+'</div>')
        }
        for (var i = 0; i < zeroTo.length; i++) {
            $('.sub-six').append('<div class="'+zeroTo[i]+' type">'+zeroTo[i]+'</div>')
        }
        
        
    }
    
    function displayTypeTwo(str, obj, obj2) {
        $('.type2').toggleClass(str);
        $('.type2').text(str);
        emptyHeadings();
        defense(obj, obj2);
    }
    
    $("div").on('click', '.type', function() {
        document.getElementById('box').innerHTML = "";
        $('.poke-name').text('');
        if(typeTwo) {
            $('.clear').click();
        }
        
        else if(typeOne && !typeTwo) {
            if (typeOne == $(this).text()) {
                typeTwo = "";
                return
            }
            emptyHeadings();
            typeTwo = $(this).text();
            twoObj = eval(typeTwo.toLowerCase());
            displayTypeTwo(typeTwo, oneObj, twoObj);
            return;
        }
        typeOne = $(this).text();
        oneObj = eval(typeOne.toLowerCase());
        displayTypeOne(typeOne, oneObj);
    });
    
    $('.clear').on('click', function() {
        $('.type1').removeClass(typeOne);
        $('.type2').removeClass(typeTwo);
        typeOne = "";
        typeTwo = "";
        $('.type1').text('');
        $('.type2').text('');
        emptyHeadings();
        $('input:text').val('');
        $('.poke-name').text('');
        document.getElementById('box').innerHTML = "";
        fillOneTypeHead();
    })

    function getPokemon(pokemonName) {
        $('.clear').click();
        pokemonName = pokemonName.toLowerCase();
        poke = (pokemon.find(function(poke) {
            return poke.name == pokemonName;
        }));
        if(poke) {
            $('.poke-name').text(pokemonName.toUpperCase());
            poke.type.forEach(getType);
        }
        else {$('.poke-name').text("POKEMON NOT FOUND");}
    };

    function getType(element) {
        var type = element.toUpperCase();
        if (type == "ELECTRIC") {type = "ELECTR"};
        if (type == "FIGHTING") {type = "FIGHT"};
        if (type == "PSYCHIC") {type = "PSYCHC"};
        
        if(typeTwo) {
            $('.clear').click();
        }
        
        else if(typeOne && !typeTwo) {
            if (typeOne == type) {
                typeTwo = "";
                return
            }
            emptyHeadings();
            typeTwo = type;
            twoObj = eval(typeTwo.toLowerCase());
            displayTypeTwo(typeTwo, oneObj, twoObj);
            return;
        }
        typeOne = type;
        oneObj = eval(typeOne.toLowerCase());
        displayTypeOne(typeOne, oneObj);
    }

    $('#search-button').on('click', function() {
        getPokemon($('#search-field').val());
    });

    $('#box').on('click','li',function() {    
        getPokemon($(this).text());
    });

    $('input:text').focus(
    function(){
        $(this).val('');
    });
    
    fillOneTypeHead();
    
    
});