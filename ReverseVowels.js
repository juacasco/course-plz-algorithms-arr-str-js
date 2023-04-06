function reverseVowels(s) {
    //create hash table con las vocales como a,A,e,E,i,I,o,O,u,U
    let vocales = getVowels(['a','A','e','E','i','I','o','O','u','U']); //get un hash table with vowels
    let p2 = s.length -1;
    let p1= 0;
    let inputW = s.split("");
    while (p1<p2) {
        if (vocales.has(inputW[p1])) {
            if (vocales.has(inputW[p2])) {
                let vHolder = inputW[p1];
                inputW[p1] = inputW[p2];
                inputW[p2] = vHolder;
                p2--;
                p1++;
            } else{
                p2--;
            }
        } else{
            p1++;
        }
    }
    return inputW.join("");;
}

function getVowels(arrV){
    let toMap = new Map();
    for (let i = 0; i < arrV.length; i++) {
        toMap.set(arrV[i], i);
    }
    return toMap;
}

let s = 'leetcode';
console.log(reverseVowels(s));

