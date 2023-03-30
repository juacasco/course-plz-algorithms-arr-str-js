// Return colors in order with Red, white, and blue
// receives numbers representing the colors: 0 = Red, 1 = White, 2 = Blue

function reorderColors(arrayColors){
    let p1 = 0;
    let p2 = arrayColors.length - 1;
    let i = 0;

    while (i<p2) {
        let current = arrayColors[i];
        if (current === 0) {
            arrayColors[i] = arrayColors[p1];
            arrayColors[p1] = current;
            i++;
            p1++;
        } else if (current === 2) {
            if (arrayColors[p2] != 2) {
                arrayColors[i] = arrayColors[p2];
                arrayColors[p2] = current;
                p2--;
            } else{
                p2--;
            }
        } else{
            i++;
        }
    }
    return arrayColors;

    /**
    Starts with three pointers, p1: as pointers for zero, at the position zero, i which is the validator, starting at position zero, and p2, for blue, which is number 2, starting at the end, last position
    I will be incrementing and switching values with either zero(red), or two(blue), and if validated value is one, it will continue to validate without progressing with the positions of the corners

    original: [{2}],1,0,1,2,1,[1]
    it1: [{1}],1,0,1,2,[1],2
    it2: [1],{1},0,1,2,[1],2
    it3: [1],1,{0},1,2,[1],2
    it4: 0,[1],{1},1,2,[1],2
    it5: 0,[1],1,1,{2},[1],2
    it6: 0,[1],1,1,[1],2,2
     */
}

let arrCol = [2,0,2,1,1,0];
console.log(reorderColors(arrCol));
let arrCol2 = [2,0,1];
console.log(reorderColors(arrCol2));