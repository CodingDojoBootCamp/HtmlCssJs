randomChance(500);

function randomChance(qtrs) {

    while (qtrs > 0) {
        qtrs--;
        if (isWinner()) {
            qtrs += getWinnings();
            console.log(qtrs);
        }
    }
    console.log(qtrs);
}



function isWinner() {
    if (getRandomIntInclusive(1, 100) == 50) {
        return true;
    }
    return false;
}


function getWinnings() {
    return getRandomIntInclusive(50, 100);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
