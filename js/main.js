//Объект с данными об игре
var game = {
    isRunning: false,
    score: 0,
    sizeX: 40,
    sizeY: 40,
}
var snake = {
    body: [],
    direction: "up",
    colour: "#ffff00",
    speed: 200,
    headCoordX: Math.round(game.sizeX / 2),
    headCoordY: Math.round(game.sizeY / 2),
}
snake.body.push([snake.headCoordX, snake.headCoordY]); //координаты "головы"




var field = document.querySelector(".field"); //заполняем поле
for (var i = 0; i < game.sizeY; i++) {
    var fieldRow = document.createElement("div");
    fieldRow.classList.add("fieldRow");

    for (var j = 0; j < game.sizeX; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add("x" + j + "y" + i);
        fieldRow.appendChild(cell);

    }
    field.appendChild(fieldRow);
}

document.querySelector(".x" + snake.body[0][0] + "y" + snake.body[0][0]).classList.add("snake"); //рисуем голову


addEventListener("keydown", function (e) { //смена направления движения по клавишам
    //    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            if (snake.direction != "down")
                snake.direction = "up";
            break;
        case "ArrowLeft":
            if (snake.direction != "right")
                snake.direction = "left";
            break;
        case "ArrowRight":
            if (snake.direction != "left")
                snake.direction = "right";
            break;
        case "ArrowDown":
            if (snake.direction != "up")
                snake.direction = "down";
            break;
        case "Enter":
            game.isRunning = true;
            console.log("game is running...");
            break;
    }
    //    console.log(snake.direction);
})

function move() {
    var headX = snake.body[0][0];
    var headY = snake.body[0][1];
    var tailX = snake.body[snake.body.length - 1][0];
    var tailY = snake.body[snake.body.length - 1][1];

    switch (snake.direction) {
        case "up":
            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
            document.querySelector(".x" + headX + "y" + (headY - 1)).classList.add("snake");
            snake.body[0] = [headX, headY - 1];
            break;
        case "down":
            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
            document.querySelector(".x" + headX + "y" + (headY + 1)).classList.add("snake");
            snake.body[0] = [headX, headY + 1];
            break;
        case "left":
            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
            document.querySelector(".x" + (headX - 1) + "y" + headY).classList.add("snake");
            snake.body[0] = [headX - 1, headY];
            break;
        case "right":
            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
            document.querySelector(".x" + (headX + 1) + "y" + headY).classList.add("snake");
            snake.body[0] = [headX + 1, headY];
            break;
    }
    console.log("move");
}




    setInterval(move, snake.speed);

