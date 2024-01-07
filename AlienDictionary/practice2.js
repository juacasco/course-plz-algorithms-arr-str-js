function isOrderedAsDictionary(alphabet, wordList){
    const alphabetMap = new Map();
    for (let i = 0; i < alphabet.length; i++) {
        alphabetMap[alphabet[i]] = i;
    }

    const compareWord = function (word1, word2){
        console.log(word2);
        const wordMinSize = Math.min(word1.length, word2.length);
        for(let i = 0; i <= wordMinSize; i++){
            if(alphabetMap[word1[i]] < alphabetMap[word2[i]]){
                return true;
            }
            if(alphabetMap[word1[i]] > alphabetMap[word2[i]]){
                return false;
            }
        }
        return word1.length <= word2.length;
    };
    console.log(wordList);
    for (let i = 1; i < wordList.length; i++){
        if(compareWord(wordList[i-1], wordList[i]) === false){
            return false;
        }
    }
    return true;
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(isOrderedAsDictionary(order1,words1));