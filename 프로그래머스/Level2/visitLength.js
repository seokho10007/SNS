const dirInfo = {
    'L' : [0, -1],
    'R' : [0, 1],
    'U' : [1, 0],
    'D' : [-1, 0]
}

function solution(dirs) {    
    const set = new Set();
    let [x, y] = [0, 0];
    
    dirs.split('').forEach(v => {
        const info = dirInfo[v];
        const [nextX, nextY] = [x + info[0], y + info[1]];
        
        if(nextX >= -5 && nextX <= 5 && nextY >= -5 && nextY <= 5) {
            set.add(`${x}${y},${nextX}${nextY}`);
            set.add(`${nextX}${nextY},${x}${y}`);
            [x, y] = [nextX, nextY];
        }
    })
    
    return set.size / 2;
}
