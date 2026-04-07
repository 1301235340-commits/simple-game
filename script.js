console.log("script started");
let currentSize = 50;
let timeLeft = 20;

//start the game
function start() {
    createSquare(50, "red");
    createSquare(60, "Darkred");
    createSquare(70, "brown");
    createSquare(80, "black")
    console.log(Math.random() * 1000);
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    let timer = document.getElementById("timer");
    timeLeft = timeLeft - 1;
    timer.innerText = timeLeft + "s";
    if (timeLeft<= 0) {
    alert("game over");
}
    }

//creates a square 
function createSquare(size, color) {
    //create element (div)
    let square = document.createElement("div");

    //set some style to make a square
    square.style.backgroundColor = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    //add it to the page
    document.body.appendChild(square);

    //add click event
    square.addEventListener("click", handleClick);
}

//generate a random x coordinate
function getRandomX(){
    let randX = Math.random() * window.innerWidth;
    return randX;
}

//genorate random y coordinate
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

// Handle the player clicking a square
function handleClick(event){
    let square = event.target;
    console.log(square.style.width);
    if (square.style.width == currentSize + "px"){
        console.log("first square");
        square.remove();
        currentSize = currentSize + 10;
    }

}