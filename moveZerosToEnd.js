function moveZerosToEnd(listNumbers){
    let pres = 0;
    let peval = 0;
    while (pres < listNumbers.length) {
        if (listNumbers[peval] === 0) { // If evaluated position is zero
            peval++;
        } else if (peval < listNumbers.length) {
            listNumbers[pres] = listNumbers[peval];
            pres++;
            peval++;
        } else {
            listNumbers[pres] = 0;
            pres++;
        }
    }
    return listNumbers;
}

console.log(moveZerosToEnd([0,1,0,3,12]))
console.log(moveZerosToEnd([0,0,1,3,12]))
console.log(moveZerosToEnd([0]))