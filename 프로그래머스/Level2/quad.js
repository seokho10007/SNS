function solution(arr) {
    var answer = [];

    const x = 0;
    const y =  arr.length / 2;
    const len = arr.length;
    const result = [0, 0]
    
    getQued(0 ,0, len, arr, result);
    
    return result;
}

const getQued = (x, y, len, arr, result) => {    
    const el = arr[x][y];
    
    if (len === 1) {
        result[el] += 1
        return result;
    }
    
    let check = true;
    
    for(let i = x; i < len + x; i++){
        for (let j = y; j < len + y; j++) {
            if(el !== arr[i][j]) {
                check = false;
                break;
            }
        }
    }
    
    if(check) result[el] += 1;
    else {
        const half = len / 2;
        
        getQued(x, y, half, arr, result);
        getQued(x, y + half, half, arr, result);
        getQued(x + half, y, half, arr, result);
        getQued(x + half, y + half, half, arr, result);
    }
    
    return result;
}
