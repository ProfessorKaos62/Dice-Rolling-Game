// Random Number Generator

let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
 
console.log(randomNumber1);
console.log(randomNumber2);

// Change Picture Function for Left Image

function getImage1(n) {
    if (n === 1) {
        console.log("img1");
        document.getElementById("img1").src="images/dice1.png";
    }
    if (n === 2) {
        console.log("img2");
        document.getElementById("img1").src="images/dice2.png";
    }
    if (n === 3) {
        console.log("img3");
        document.getElementById("img1").src="images/dice3.png";
    }
    if (n === 4) {
        console.log("img4");
        document.getElementById("img1").src="images/dice4.png";
    }
    if (n === 5) {
        console.log("img5");
        document.getElementById("img1").src="images/dice5.png";
    }
    if (n === 6) {
        console.log("img6");
        document.getElementById("img1").src="images/dice6.png";
    }
}

let theFirstImage = getImage1(randomNumber1);

// Change Picture Function for Right Image

function getImage2(n) {
    if (n === 1) {
        console.log("img1");
        document.getElementById("img2").src="images/dice1.png";
    }
    if (n === 2) {
        console.log("img2");
        document.getElementById("img2").src="images/dice2.png";
    }
    if (n === 3) {
        console.log("img3");
        document.getElementById("img2").src="images/dice3.png";
    }
    if (n === 4) {
        console.log("img4");
        document.getElementById("img2").src="images/dice4.png";
    }
    if (n === 5) {
        console.log("img5");
        document.getElementById("img2").src="images/dice5.png";
    }
    if (n === 6) {
        console.log("img6");
        document.getElementById("img2").src="images/dice6.png";
    }
}

let theSecondImage = getImage2(randomNumber2);

function chooseWinner(player1, player2) {
    if (player1 > player2) {
        document.getElementById("announcement").innerHTML = "Player 1 Wins!";
    }
    else if (player2 > player1) {
        document.getElementById("announcement").innerHTML = "Player 2 Wins!";
    }
    else {
        document.getElementById("announcement").innerHTML = "Tie Game!";
    }
}

let winner = chooseWinner(randomNumber1, randomNumber2);
