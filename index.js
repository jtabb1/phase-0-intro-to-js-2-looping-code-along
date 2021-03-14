// Code your solutions in this file

function writeCards(givers, occasion) {
    let returnArray = [];
    for(let i = 0; i < givers.length; i++) {
        returnArray[i] = `Thank you, ${givers[i]}, for the wonderful ${occasion} gift!`
    }
    return returnArray;
}

// 

function countDown(fromNum) {
    for(let i = fromNum; i > -1; i--) {
        console.log(i);
    }
}

// countDown(10);