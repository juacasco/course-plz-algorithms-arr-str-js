function isAlienSorted(palabras, orden) {
    /* 
        Lógica propuesta es calcular acumulativamente el valor de las palabras
        Se va evaluando en el orden de ingreso en el arreglo de palabras, 
        y se compara contra la palabra que le sigue en el arreglo.,
        Cuando se detecta que la palabra siguiente debería estar antes, se retorna false
        y se detiene la evaluación
        Para comparar el orden se acumula en una variable la suma de las posiciones de cada letra
        según el alfabeto
    */
    for (let indexW = 0; indexW < palabras.length-1; indexW++) {
        let evalWord1Value = 0, evalWord2Value = 0;
        let evalWord1 = palabras[indexW];
        let evalWord2 = palabras[indexW+1]

        console.log(`Evaluating: ${evalWord1} and ${evalWord2}`);

        for (let indexL = 0; indexL < evalWord1.length; indexL++) {
            // get accumulated value of word 1 and word 2
            let word1LetterValue = orden.indexOf(evalWord1[indexL]);
            let word2LetterValue = orden.indexOf(evalWord2[indexL]);

            evalWord1Value += word1LetterValue +1;
            evalWord2Value += word2LetterValue +1;

            console.log(`Evaluating ${evalWord1[indexL]} value: ${evalWord1Value} and ${evalWord2[indexL]} value ${evalWord2Value}`);
            if (evalWord1Value > evalWord2Value) {
                console.log(`Returning false as is not ordered`);
                return false;
            }
        }
    }
    console.log(`Returning true as is ordered`);
    return true;
}

function isAlienSortedPlatziProposal(palabras, orden) {
    console.log(palabras);
    console.log(orden);
    const mapa_diccionario = new Map();

    for (let i = 0; i < orden.length; i++) {
      mapa_diccionario[orden[i]] = i;
    }

    const comparar = function (palabra1, palabra2) {
      const longitud = Math.min(palabra1.length, palabra2.length);

      for (let i = 0; i < longitud; i++) {
        if (mapa_diccionario[palabra1[i]] < mapa_diccionario[palabra2[i]]) {
          return true;
        }
        if (mapa_diccionario[palabra1[i]] > mapa_diccionario[palabra2[i]]) {
          return false;
        }
      }

      return palabra1.length <= palabra2.length;
    };

      for (let i = 1; i < palabras.length; i++) {
        if (comparar(palabras[i - 1], palabras[i]) === false) {
          return false;
        }
      }

    return true;
  }


const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";
isAlienSortedPlatziProposal(words1, order1);
const words2 = ["habito", "hacer", "sonreir", "lectura"];
const order2 = "hlabcdfgijkmnopqrstuvwxyz";
isAlienSorted(words2, order2);
const words3 = ["conocer", "cono"];
const order3 = "abcdefghijkmnopqrstuvwxyz";
isAlienSorted(words3, order3);