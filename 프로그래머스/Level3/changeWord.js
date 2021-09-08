function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let answer = 0;
        
    const visited = Array(words.length).fill(false);
    const q = [[begin, 0]];
    
    while (q.length) {
        const [b, cnt] = q.shift();
        
        if (target === b) {
            answer = cnt;
            break;
        }
        
        
        for(let i = 0; i < words.length; i++) {
           const idx = [...words[i]].reduce((a, c, i) => (c !== b[i] ? a.push(i) : a, a), []);
            
            if (idx.length === 1 && !visited[i]) {
                visited[i] = true;
                q.push([words[i], cnt + 1]);
            }
            
        }
    }
    
    
    return answer;
}
