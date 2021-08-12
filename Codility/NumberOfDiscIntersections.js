function solution(A) {
    const range = []
    let result = 0;

    for(let i = 0; i< A.length; i++){
        let start = i - A[i] <= 0 ? 0 : i - A[i]
        let radius = A[i] + i >= A.length ? A.length : A[i] + i;
        range.push([start, radius])
    }

    range.sort((a,b) => b[1] - a[1])

    for(let i=0; i < A.length - 1; i++){
        for(let j = i + 1; j < A.length; j++){
            if(result > 10000000){
                return -1;
            }
            if(range[j][0] > range[i][1]){
                break;
            }
            if(range[j][0] >= range[i][0] && range[j][0] <= range[i][1]){
                result++;
            }
        }
    }

    return result;
}
