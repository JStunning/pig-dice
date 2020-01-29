//BackEnd

var p1Scores = {
    total: 0,
    turn: 0,
    roll: 0,
}


function getRoll() {
    var min = 1;
    var max = 7;
    return Math.floor(Math.random() * (max - min) + min);
}

// Player 2 functions

function addRollToTurn2() {
    p2Scores.roll = getRoll();
    if (p2cores.roll !=1) {
        return p2Scores.turn += p1Scores.roll;
    } else { 
        return p2Scores.turn = 0;
    }
}

function addTotal2() {
    p2Scores.turn += p2Scores.total;
    p2Scores.turn = 0;
    if (p1Scores.total >= 100) {
    $("#winner").text("Player 2 Winner")
  
    }
}
//Player one functions
function addRollToTurn() {
    p1Scores.roll = getRoll();
    if (p1Scores.roll !=1) {
        return p1Scores.turn += p1Scores.roll;
    } else { 
        return p1Scores.turn = 0;
    }
}

function addTotal(player){
    player.total += p1Scores.turn;
    p1Scores.turn = 0;
    if (p1Scores.total >= 100) {
        $("#winner").text("Player 1 Winner")
    }
}


$(document).ready(function(){

    //Frontend

    $("#roll").click(function(){
        p1Scores.roll = getRoll();
        addRollToTurn();
        $("#rollBox").text(p1Scores.roll);

        $("#p1Roll").text(p1Scores.roll)
        $("#p1Turn").text(p1Scores.turn)
        
    })


    $("#hold").click(function(){
        addTotal();  
        $("#p1Total").text(p1Scores.total)
        $("#p1Turn").text(p1Scores.turn)
    })

})
    