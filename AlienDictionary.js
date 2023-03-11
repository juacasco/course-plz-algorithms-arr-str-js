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
            evalWord1Value += orden.indexOf(evalWord1[indexL])+1;
            evalWord2Value += orden.indexOf(evalWord2[indexL])+1;
            
            console.log(`Evaluating ${evalWord1[indexL]} value: ${evalWord1Value} and ${evalWord2[indexL]} value ${evalWord2Value}`);
            if (evalWord1Value > evalWord2Value) {
                console.log(`Returning false as is not ordered`);
                return false;
            }
        }
    }
    return true;
}
const words1 = ["habito", "ha", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";
isAlienSorted(words1, order1);