function isOrderedAsExpected(alphabet, listOfWords){
    const alphabetMap = new Map();
    for(let i = 0; i < alphabet.length; i++){
        alphabetMap[alphabet[i]] = i;
    }
    const compareWord = function (w1, w2){
        let minWordLength = Math.min(w1.length, w2.length);
        for(let i=0; i<minWordLength;i++){
            if(alphabetMap[w1[i]] < alphabetMap[w2[i]]){
                return true;
            }
            if(alphabetMap[w2[i]] > alphabetMap[w2[i]]){
                return false;
            }
        }
        return w1.length <= w2.length;
    }
    for(let i = 1; i < listOfWords.length; i++){
        if(compareWord(listOfWords[i-1], listOfWords[i]) === false){
            return false;
        }
    }
    return true;
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(isOrderedAsExpected(order1,words1));