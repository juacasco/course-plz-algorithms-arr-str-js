function getMaxArea(alturas){
    let p1 = 0;
    let p2 = alturas.length-1;
    let maxArea = 0;
    while (p1<p2){
        let area = Math.min(alturas[p1],alturas[p2])*(p2-p1);
        maxArea = Math.max(area,maxArea)
        if (alturas[p1] > alturas[p2]) {
            p2--;
        }
        else{
            p1++;
        }
    }
    return maxArea;
}

const alturas = [1,8,6,2,5,4,8,3,7]
console.log(getMaxArea(alturas));

const alturas1 = [8,1,6,2,5,4,1,3,7];
console.log(getMaxArea(alturas1));