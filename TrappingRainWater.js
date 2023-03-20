function trappedWater(listOfColumns){
    let p1 = 0;
    let p2 = listOfColumns.length-1; //10
    let trappedWater = 0;
    let lastMinHeight = 0;
    while (p1<p2) {
        console.log (`p1: ${p1}, p2:${p2}`)
        let height = (Math.min(listOfColumns[p1], listOfColumns[p2]) - lastMinHeight) <= 0? 0: (Math.min(listOfColumns[p1], listOfColumns[p2]) - lastMinHeight);

        let area = height * (p2-p1-1);
        console.log(`area: ${area}, height: ${height}, base:${p2-p1} `);
        lastMinHeight = Math.max(Math.min(listOfColumns[p1], listOfColumns[p2]),lastMinHeight)

        trappedWater += area - Math.min(listOfColumns[p2], lastMinHeight);
        console.log(`lastMinHeight: ${lastMinHeight}, trappedWater: ${trappedWater}`);
        if (listOfColumns[p1] <= listOfColumns[p2]) {
            p1++;//1 |
        }else{
            p2--;//10 |
        }
    }
    return trappedWater;
}

/*const alturas = [1,8,6,2,5,4,8,3,7]
console.log(trappedWater(alturas));

const alturas1 = [8,1,6,2,5,4,1,3,7];
console.log(trappedWater(alturas1));
*/
const alturas2 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trappedWater(alturas2));