// 정수 P, Q, R 이 존재할 때 
// P + Q > R && Q + R > P && R + P > Q 를 만족해야한다.
// 정수가 들어있는 배열 A를 정렬하여 조건을 검사한다.
// A[0] + A[1] > A[2] 가 만족하지 않는 경우 A[2]보다 더 큰 값인 A[3]는 당연히 A[0] + A[1] > A[3]를 통과하지 못하므로
// 인덱스를 증가시켜 A[1] 부터 조건을 검사한다.
// 시간복잡도 O(logN * N)
function solution(A) {
    A.sort((a, b) => a - b)

    for(let i = 0; i < A.length - 2; i++) {
        const [P, Q, R] = [A[i], A[i+1], A[i+2]]
        if(P + Q > R && Q + R > P && R + P > Q) return 1;
    }

    return 0;
}
