function solution(s) {
    var answer = [];
    const arr = s.replace(/[{/}]/gi,'').split(/\D/gi);
    const info = {};

    arr.forEach(v => {
        if(!(v in info)) info[v] = 0;
        info[v] += 1
    })

    for(const key in info) answer.push([Number(key), info[key]])


    return answer.sort((a,b) => b[1] - a[1]).map(v => v[0]);
}
