function getSquaresOrderedArray(inputArray){
    let p1 = 0;
    let p2 = inputArray.length -1;
    let returnArr = [];
    let rp2 = inputArray.length -1;
    while (p1<=p2) {
        let sqP1 = inputArray[p1]**2;
        let sqP2 = inputArray[p2]**2;
        returnArr[rp2] = Math.max(sqP1, sqP2);
        if (sqP1>sqP2) { // p1 es más grande
            p1++;
        } else{
            p2--;
        }
        rp2--;
    }
    return returnArr;
}

let inputA = [-4,-1,0,3,10];
console.log(getSquaresOrderedArray(inputA));

let inputB = [-7,-3,2,3,11];
console.log(getSquaresOrderedArray(inputB));