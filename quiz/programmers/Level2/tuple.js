// function solution(s) {
//     var answer = [];
//     const arr = s.replace(/[{/}]/gi,'').split(/\D/gi);
//     const info = {};

//     arr.forEach(v => {
//         if(!(v in info)) info[v] = 0;
//         info[v] += 1
//     })

//     for(const key in info) answer.push([Number(key), info[key]])


//     return answer.sort((a,b) => b[1] - a[1]).map(v => v[0]);
// }

// 정규 표현식: 숫자만 추출
// reduce를 통한 객체 생성
// 생성된 객체를 Object.entries 메소드를 통해 [key, value] 형태의 배열로 변환후 정렬
// map 메소드를 통해 value 값으로 이루어진 함수 반환
const solution = (s) => {
    const nums = s.match(/[0-9]+/gi);
    const info = nums.reduce((a, c) => {
        !a[c] ? (a[c] = 1) : a[c]++;
        return a;
    }, {});
    
    return Object.entries(info).sort((a, b) => b[1] - a[1]).map(el => Number(el[0]));
}
