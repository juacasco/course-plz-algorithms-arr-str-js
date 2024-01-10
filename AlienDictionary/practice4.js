function isProperlySorted(alphabet, listWords){
    const alphabetMap = new Map();
    for (let i = 0; i < alphabet.length; i++){
        alphabetMap[alphabet[i]] = i;
    }
    const compareWordsOrder = function (w1, w2){
        const minWordLen = Math.min(w1.length, w2.length);
        for(let i = 0; i<minWordLen;i++){
            if(alphabetMap[w1[i]] < alphabetMap[w2[i]]){
                return true;
            }
            if(alphabetMap[w1[i]] > alphabetMap[w2[i]]){
                return false;
            }
        }
        return w1.length <= w2.length;
    }
    for (let i=1; i<listWords.length;i++){
        if(compareWordsOrder(listWords[i-1], listWords[i]) === false){
            return false;
        }
    }
    return true;
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(isProperlySorted(order1,words1));