console.log("script started");

//start the game
function start() {
    createSquare(50);
    createSquare(80);
    createSquare(90);
    createSquare(110)
    console.log(Math.random() * 1000);
}

//creates a square
function createSquare(size) {
    //create element (div)
    let square = document.createElement("div");

    //set some style to make a square
    square.style.backgroundColor = "darkred";
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.position = "absolute";
    square.style.borderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    //add it to the page
    document.body.appendChild(square);
}

//generate a random x coordinate
function getRandomX(){
    let randX = Math.random * window.innerWidth;
    return randX;
}

//genorate random y coordinate
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}