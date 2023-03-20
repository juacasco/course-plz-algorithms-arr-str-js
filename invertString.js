function invertString(stringArr){
    p1 = 0;
    p2 = stringArr.length-1;
    while (p1<p2) {
        let leftLetter = stringArr[p1];
        stringArr[p1] = stringArr[p2];
        stringArr[p2] = leftLetter;
        p1++;
        p2--;
    }
    return stringArr;
}

console.log(invertString(["H", "a", "n", "n", "a", "h"]));