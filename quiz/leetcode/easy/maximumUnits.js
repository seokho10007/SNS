const maximumUnits = function(boxTypes, truckSize) {
    const arr = boxTypes.sort((a,b) => b[1] - a[1]);
    
    let answer = 0;
    let cnt = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const [numberOfBoxes, numberOfUnitsPerBox] = arr[i];
        
        if (cnt + numberOfBoxes < truckSize) {
            cnt += numberOfBoxes;
            answer += numberOfBoxes * numberOfUnitsPerBox;
        } else {
            const remain = truckSize - cnt;
            answer += remain * numberOfUnitsPerBox;
            break;
        }
    }
    
    return answer; 
};
