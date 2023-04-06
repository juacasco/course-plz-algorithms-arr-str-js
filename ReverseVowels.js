function reverseVowels(s) {
    //create hash table con las vocales como a,A,e,E,i,I,o,O,u,U
    let vocales = getVowels(['a','A','e','E','i','I','o','O','u','U']); //get un hash table with vowels
    let p2 = s.length -1;
    let p1= 0;
    while (p1<p2) {
        if (vocales.has(s[p1])) {
            if (vocales.has(s[p2])) {
                let vHolder = s[p1];
                s[p1] = s[p2];
                s[p2] = vHolder;
                console.log(s);
                p2--;
                p1++;
            } else{
                p2--;
            }
        } else{
            p1++;
        }
    }
    return s;
}

function getVowels(arrV){
    let toMap = new Map();
    for (let i = 0; i < arrV.length; i++) {
        toMap.set(arrV[i], i);
    }
    console.log(toMap);
    return toMap;
}

let s = 'hola';
console.log(reverseVowels(s));

