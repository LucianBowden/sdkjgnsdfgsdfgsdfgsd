let cards = []
let cardsNum = 52
let playerScores = [0, 0, 0, 0]
let playerStates = [0, 0, 0, 0]
let pos = 0
let turn = 0
function setup() {
    background(0, 255, 0)
    img = loadImage("assets/cards.png")
    createCanvas(600, 600)
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j <= 13; j++) {
            let value = 0
            let suit = i
            let card = j
            switch (j) {
                case 11:
                    //card = "Jack"
                    break
                case 12:
                    //card = "Queen"
                    break
                case 13:
                    //card = "King"
                    break
                case 1:
                //card = "Ace"
            }
            switch (i) {
                case 0:
                    //suit = "Hearts"
                    break
                case 1:
                    //suit = "Diamonds"
                    break
                case 2:
                    //suit = "Spades"
                    break
                case 3:
                //suit = "Clubs"
            }
            if (j > 10) {
                value = 10
            }
            else {
                value = j
            }

            cards.push({ "suit": suit, "card": card, "value": value })
        }
    }
    console.log(cards)
}

function draw() {
}

function stick() {
    let n = round(Math.random() * cardsNum)
    playerScores[turn] += cards[n].value
    cards.slice(n, 1)
    cardsNum--;
    image(img, pos, 100 * turn, 72, 96, 72 * (cards[n].card - 1), cards[n].suit * 96, 72, 96)
    console.log("you drew a " + cards[n].card + " of " + cards[n].suit + "\nyou now have a total score of " + playerScores[turn])
    pos += 50
    if (playerScores[turn] > 21) {
        playerStates[turn] = 2
        console.log("you have bust")
        fill(255, 0, 0, 100)
        rect(0, 100 * turn, 500, 100)
        turn += 1
        pos = 0
        if (turn > playerScores.length - 1) {
            for (i = 0; i <= playerScores.length; i++) {
                if (playerStates[i] == 2) {
                    fill(255, 0, 255)
                }
                else {
                    fill(0, 0, 0, 255)
                }
                textSize(100)
                text(playerScores[i], 200, 100 * i)
            }
        }
    }

}
function stand() {
    for (let i = 0; i < pos; i += 50) {
        image(img, i, 100 * turn, 72, 96, 72 * 13, 96, 72, 96)
        console.log(i)
    }
    fill(0, 255, 0, 50)
    rect(0, 100 * turn, 500, 100)
    playerStates[turn] = 1;
    turn += 1
    console.log("you stand with a value of " + playerScores[turn])
    if (turn > playerScores.length - 1) {
        for (i = 0; i < playerScores.length; i++) {
            if (playerStates[i] == 2) {
                fill(255, 0, 255)
            }
            else {
                fill(0, 0, 0, 255)
            }
            textSize(100)
            text(playerScores[i], 200, 100 * i + 100)
        }
        setTimeout(1000, () => { location = location })
    }
    pos = 0
}