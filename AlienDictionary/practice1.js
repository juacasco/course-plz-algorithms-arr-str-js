function isAlienDictionary(alphabet, listOfWords){
    const alphabetMap = new Map();

    for (let i = 0; i < alphabet.length; i++) {
        alphabetMap[alphabet[i]] = i;
    }

    const compareWord = function (w1, w2){
        const wordMinSize = Math.min(w1.length, w2.length);

        for (let i = 0; i < wordMinSize; i++) {
            if (alphabetMap[w1[i]] < alphabetMap[w2[i]]) {
                return true;
            }
            if (alphabetMap[w1[i]] > alphabetMap[w2[i]]) {
                return false;
            }
        }
        return w1.length <= w2.length;
    };
    for (let i = 1; i < listOfWords.length; i++){
        if(compareWord(listOfWords[i-1], listOfWords[i]) === false){
            return false;
        }
    }
    return true
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(isAlienDictionary(order1,words1));