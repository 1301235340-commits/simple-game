console.log("script started");
let smallest = 50;

//start the game
function start() {
    createSquare(50, "red");
    createSquare(80, "green");
    createSquare(90, "blue");
    createSquare(110, "black")
    console.log(Math.random() * 1000);
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
    console.log(square);
    //make size pattern i.e. increase. by the smae amount each 10, 20, 30, ...
}