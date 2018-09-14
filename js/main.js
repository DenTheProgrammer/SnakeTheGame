//Объект с данными об игре
var game = {
    isRunning: false,
    score: 0,
    sizeX: 20,
    sizeY: 20,
    snake: {
        direction: "up",
        len: 2,
        speed: 200,
        headCoordX: 0,
        headCoordY: 0,
    }
}
game.snake.headCoordX = Math.round(game.sizeX / 2);
game.snake.headCoordY = Math.round(game.sizeY / 2);




var field = document.querySelector(".field"); //заполняем поле
for (var i = 0; i < game.sizeY; i++) {
    var fieldRow = document.createElement("div");
    fieldRow.classList.add("fieldRow");

    for (var j = 0; j < game.sizeX; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("x", j); //даем ячейкам атрибуты с координатами
        cell.setAttribute("y", i);
        fieldRow.appendChild(cell);

    }
    field.appendChild(fieldRow);
}


addEventListener("keydown",function(e){//смена направления движения по клавишам
//    console.log(e.key);
    switch(e.key){
        case "ArrowUp":
            if(game.snake.direction!="down")
            game.snake.direction="up";
            break;
        case "ArrowLeft":
            if(game.snake.direction!="right")
            game.snake.direction="left";
            break;
        case "ArrowRight":
            if(game.snake.direction!="left")
            game.snake.direction="right";
            break;
        case "ArrowDown":
            if(game.snake.direction!="up")
            game.snake.direction="down";
            break;
    }
//    console.log(game.snake.direction);
})

function move(){
    
}