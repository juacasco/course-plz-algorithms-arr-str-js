function isProperlyOrganized(alphabet, listOfWords){
    const alphabetMap = new Map();
    for (let i = 0; i <= alphabet.length; i++) {
        alphabetMap[alphabet[i]] = i;
    }
    const compareWords = function (word1, word2){
        const minWordSize = Math.min(word1.length, word2.length);
        for(let i = 0; i < minWordSize; i++){
            if(alphabetMap[word1[i]] < alphabetMap[word2[i]]){
                return true;
            }
            if(alphabetMap[word1[i]] > alphabetMap[word2[i]]){
                return false;
            }
        }
        return word1.length <= word2.length;
    };
    for(let i = 1; i < listOfWords.length; i++){
        if(compareWords(listOfWords[i-1], listOfWords[i]) === false){
            return false;
        }
    }
    return true;
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(isProperlyOrganized(order1,words1));