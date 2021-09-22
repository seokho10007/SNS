function solution(a, b, g, s, w, t) {
    var answer = Infinity;
    
    let start = 0;
    let end = 10e5 * 4 * 10e9;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        let [sum_g, sum_s, sum_a] = [0, 0, 0];
        
        for (let i = 0; i < s.length; i++) {
            const [gold, silver, now_w, now_t] = [g[i], s[i], w[i], t[i]];

            let cnt = Math.floor(mid / (now_t * 2));
            
            if (mid % (now_t * 2) >= t[i]) cnt++;
            
            sum_g += (gold < cnt * now_w) ? gold : cnt * now_w;
            sum_s += (silver < cnt * now_w) ? silver : cnt * now_w;
            sum_a += (gold + silver < cnt * now_w) ? gold + silver : cnt * now_w;
        } 
        
        if (sum_g >= a && sum_s >= b && sum_a >= a + b) {
            end = mid - 1;
            answer = Math.min(mid, answer);
        }
        else start = mid + 1;
    }
    
    return answer;
}
