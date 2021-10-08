function solution(A) {
    let result = 0;
    
    const range = A.map((v, i) => [i - v, v + i]).sort((a,b) => a[0] - b[0])
    

    for(let i=0; i < A.length - 1; i++){
        for(let j = i + 1; j < A.length; j++){
            if(result > 10000000) return -1;    
            if(range[j][0] > range[i][1]) break;
            if(range[j][0] >= range[i][0] && range[j][0] <= range[i][1]) result++;
        }
    }

    return result;
}
