
function solution(S) {
    let left = 0;
    let right = 0;

    for(let i = 0; i < S.length; i++){
        if(S[i] === '(') left++;
        else right++;

        if(right > left) return 0;
    }

    return left === right ? 1 : 0;
}
