// 탐색시 이전에 왔던 방향과 현재 위치의 기호를 알아야함
// 노드 도착시 해당 노드가 온 방향 탐색
// 탐색 후 알파벳에 따라 어떤 방향으로 이동해야할지 계산
// 만약 범위를 벗어난다면 해당 방향의 끝행으로 이동
// (출발 노드, 도착노드)가 이미 존재한다면 사이클 생성

// 이전 노드 -> 현재노드 방향 계산
const direction ={ "-1,0": 0, "1,0": 1, "0,-1": 2, "0,1": 3 } 
const d1 ={ "-1,0": '상', "1,0": '하', "0,-1": '좌', "0,1": '우' } 
const cmds = {
    S: [[1, 0], [-1, 0], [0, 1], [0, -1]],
    L: [[0, 1], [0, -1], [1, 0], [-1, 0]],
    R: [[0, -1], [0, 1], [-1, 0], [1, 0]]
}

// 상 하 좌 우
const S = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const L = [[0, 1], [0, -1], [-1, 0], [1, 0]];
const R = [[0, -1], [0, 1], [1, 0], [-1, 0]];

function solution(grid) {
    var answer = [];
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];    
    
    const ch = Array.from({length: grid.length}, () => Array.from({length: grid[0].length}, () => Array(4).fill(0)));
    
    for (let d = 0; d < dx.length; d++) {
        if (ch[0][0][d]) continue;
        const cnt = checker(0, 0, d);
        if (cnt) answer.push(cnt);
      }
    
  function checker(x, y, d) {
    let cnt = 0;
    while (true) {
      if (ch[x][y][d]) break;
      ch[x][y][d] = 1;
      cnt++;

      x = x + dx[d];
      y = y + dy[d];
      if (x < 0) x = grid.length - 1;
      if (x >= grid.length) x = 0;
      if (y < 0) y = grid[0].length - 1;
      if (y >= grid[0].length) y = 0;
      d = getNextDir(grid[x][y], d);
    }
    return cnt;
  }

  return answer.sort((a, b) => a - b);
}

function getNextDir(block, dir) {
  if (block === "S") return dir;
  if (block === "L") return [2, 3, 1, 0][dir];
  if (block === "R") return [3, 2, 0, 1][dir];
}
