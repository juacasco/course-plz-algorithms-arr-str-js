function isOrdered(alphabet, listOfWords){
    const alphabetDictionary = new Map();
    for(let i=0; i<alphabet.length; i++){
        alphabetDictionary[alphabet[i]] = i;
    }
    const validateWordsOrder = function (word1, word2){
        const minWordLen = Math.min(word1.length, word2.length);
        for(let i=0; i<minWordLen;i++){
            if(alphabetDictionary[word1[i]] < alphabetDictionary[word2[i]]){
                return true;
            }
            if(alphabetDictionary[word1[i]] > alphabetDictionary[word2[i]]){
                return false;
            }
        }
        return word1.length <= word2.length;
    }
    for(let i=1; i<listOfWords.length;i++){
        if(validateWordsOrder(listOfWords[i-1], listOfWords[i]) === false){
            return false;
        }
    }
    return true;
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(isOrdered(order1,words1));