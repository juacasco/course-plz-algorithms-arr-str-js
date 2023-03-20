function trappedWater(listOfColumns){
    let p1 = 0;
    let p2 = listOfColumns.length-1; //10
    let trappedWater = 0;
    let maxLHeight = 0;
    let maxRHeight = 0;
    while (p1<p2) {
        if (listOfColumns[p1] < listOfColumns[p2]) {
            if (listOfColumns[p1] < maxLHeight) {
                trappedWater += maxLHeight-listOfColumns[p1];
            } else{
                maxLHeight = listOfColumns[p1];
            }
            p1++;
        }else{
            if (listOfColumns[p2] < maxRHeight) {
                trappedWater += maxRHeight - listOfColumns[p2];
            }   else{
                maxRHeight = listOfColumns[p2];
            }
            p2--;
        }
        console.log(`p1: ${p1}, p2:${p2}`);
        console.log(`trappedWater: ${trappedWater}, maxLHeight: ${maxLHeight}, maxRHeight: ${maxRHeight}`);
    }
    return trappedWater;
}

const alturas = [1,8,6,2,5,4,8,3,7]
console.log(trappedWater(alturas));

const alturas1 = [8,1,6,2,5,4,1,3,7];
console.log(trappedWater(alturas1));

const alturas2 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trappedWater(alturas2));