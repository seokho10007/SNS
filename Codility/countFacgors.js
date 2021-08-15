const solution = (N) => {
    let result = 0;

    for(let i =1; i * i <= N; i++){
        if(N % i === 0) {
            result++;

            if(i * i < N){
                result++;
            }
        }
    }
    return result
}
