//BackEnd

var playerScores = {
    p1Total: 0,
    p2Total: 0,
}


var turnScores = {
    runningTotal: 0,
    roll: 0,
    turnCount: 1,
}

function turnCount() {
    turnScores.turnCount++
    if(turnScores.turnCount % 2 == 0){
        console.log("player 2 turn")
        $("#playerTwoTurn").show();
        $("#playerOneTurn").hide();
    }
    else {
        console.log("player 1 turn")
        $("#playerOneTurn").show();
        $("#playerTwoTurn").hide();
    }
}
    function newGame() {
        turnScores.runningTotal= 0
        turnScores.roll = 0
        turnScores.turnCount = 0
        playerScores.p1Total= 0
        playerScores.p2Total= 0
        turnScores.turnCount =2

}

function getRoll() {
    var min = 1;
    var max = 7;
    return Math.floor(Math.random() * (max - min) + min);
}

function addRollToRunningTotal() {
    turnScores.roll = getRoll();
    if (turnScores.roll != 1) {
        return turnScores.runningTotal += turnScores.roll;
    } else { 
        turnCount()
        return turnScores.runningTotal = 0;
    }
}



function addTotal(){
    // need to write if statment telling computer whether to add running total to p1 or p2 

    if(turnScores.turnCount % 2 != 0) {

        playerScores.p1Total += turnScores.runningTotal;
        turnScores.runningTotal = 0;
        if (playerScores.p1Total >= 100) {
            $("#winner").text("Player 1 Winner")
        } 
    } else {
        playerScores.p2Total += turnScores.runningTotal;
        console.log(playerScores.p2Total)
        turnScores.runningTotal = 0;
        if (playerScores.p2Total >= 100) {
            $("#winner").text("Player 2 Winner")
        }
    }
}


$(document).ready(function(){

    //Frontend

    //Developing Start New game funcitonality
    $("#start").click(function(){
        newGame()
        $("#p1Total").text(playerScores.p1Total);
        $("#p2Total").text(playerScores.p2Total);
        $("#p1Roll").text(turnScores.roll);
        $("#p1Turn").text(turnScores.runningTotal);
        $("#p2Roll").text(turnScores.roll);
        $("#p2Turn").text(turnScores.runningTotal);
    })
    // 

    $("#roll").click(function(){
        addRollToRunningTotal();
        
        $("#p1Roll").text(turnScores.roll);
        $("#p1Turn").text(turnScores.runningTotal);
        $("#p2Roll").text(turnScores.roll);
        $("#p2Turn").text(turnScores.runningTotal);
        
    })


    $("#hold").click(function(){
        addTotal();  
        $("#p1Total").text(playerScores.p1Total);
        $("#p2Total").text(playerScores.p2Total);
        turnCount()
    })

})
    