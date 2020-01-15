var logo1 = document.querySelector('.img1');
var logo2 = document.querySelector('.img2');

checkRandom()

function checkRandom() {

    var randomNum1 = Math.ceil(Math.random() * 6)
    var randomNum2 = Math.ceil(Math.random() * 6)
    var text = "Refresh Me!"
    
    if (randomNum1 > randomNum2) {
        text = "⛳Player 1 wins!"
    } else if (randomNum2 > randomNum1) {
        text = "Player 2 wins! ⛳"
    } else {
        text = "It's a draw!"
    }

    document.querySelector('h1').innerText = text


    var image1 = choseImage(randomNum1)
    var image2 = choseImage(randomNum2)

    logo1.src = image1
    logo2.src = image2
}


function choseImage(randomNum) {

    console.log()
    switch (randomNum) {
        case 1:
            return "images/dice1.png"
            break
        case 2:
            return "images/dice2.png"
            break
        case 3:
            return "images/dice3.png"
            break
        case 4:
            return "images/dice4.png"
            break
        case 5:
            return "images/dice5.png"
            break
        case 6:
            return "images/dice6.png"
            break
    }

}