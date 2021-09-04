function solution(n) {
    const arr = [1, 1]


    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
    }

    return arr[arr.length - 1];
}
