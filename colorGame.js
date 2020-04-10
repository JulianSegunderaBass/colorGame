// Randomized color per square
var numSquares = 6;
var colors = generateRandomColors(numSquares);

// Selecting all squares
var squares = document.querySelectorAll(".square");

// The color currently being guessed
var pickedColor = pickColor();

// Displaying picked color in header
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";  
    }

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""
});

resetButton.addEventListener("click", function() {
    // Possible quicker method that reloads page
    // location.reload();

    // Generate all new colors
    colors = generateRandomColors(numSquares);

    // Pick a new random color from the array
    pickedColor = pickColor();

    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    // Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = ""
    this.textContent = "New Colors";
});

// Iterating through each square to give a background color + event handlers
for (var i = 0; i < squares.length; i++) {
    // Initial colors
    squares[i].style.backgroundColor = colors[i];

    // Click listeners for squares
    squares[i].addEventListener("click", function() {
        // Grab color of picked square
        var clickedColor = this.style.backgroundColor;

        // Compare clicked color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }
    });
}

function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

// Function to return a random color index from the colors array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

// Function to generate array of 3/6 random colors
function generateRandomColors(num) {
    // Make array
    var arr = [];

    // Add "num" random colors to array
    for (var i = 0; i < num; i++) {
        // Get random color and push into array
        arr.push(randomColor());
    }

    // Return array
    return arr;
}

// Function to generate one random color
function randomColor() {
    // Pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // Pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    // Pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}