function solution(k, dungeons) {
    const result = dfs(0, k, dungeons, new Set());
        
    return result.sort((a, b) => b - a)[0];
}

const dfs = (cnt, k, dungeons, result) => {
    if (cnt > 0) result.add(cnt);
    
    for (let i = 0; i < dungeons.length; i++) {
        const [min, consume] = dungeons[i];
        
        if (k >= min) {
            // 현재 값을 추출한 배열을 매개변수로 넘김
            const arr = [...dungeons];
            arr.splice(i, 1);
            dfs(cnt + 1, k - consume, arr, result);
        }
    }
    
    return [...result];
}
