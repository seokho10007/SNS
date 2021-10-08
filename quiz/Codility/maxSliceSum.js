// DP 카데인 알고리즘
const solution = (arr) => {
    let local = arr[0];
    let global = arr[0];

    for(let i = 1; i < arr.length; i++) {
        local = Math.max(arr[i], local + arr[i]);
        if(local > global) global = local
    }
    return global
}
