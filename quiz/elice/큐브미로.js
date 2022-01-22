const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

const checkPostion = (x, y, z, l, r, c) => x >= 0 && x < l && y >= 0 && y < r && z >= 0 && z < c;
const xpos = [0, 0, 0, 0, 1, -1];
const ypos = [1, -1, 0, 0, 0, 0];
const zpos = [0, 0, 1, -1, 0, 0];


r1.on('line', function (l) {
  input.push(l);
}).on('close', function () {
  const [l, r, c] = input.shift().split(' ').map(n => Number(n));
  const board = [];
  const visited = Array.from({ length: l }, () => Array.from({length: c }, () => Array(r).fill(false)));
  
  for (let i = 0; i < l; i++) {
    const list = [];
    while(input.length) {
      const str = input.shift();
      if (!str) break;
      list.push(str);
    }
    board.push(list);
  }
  
  const q = [[0, 0, 0, 0]];
  let result = 0;
  
  while(q.length) {
    const [x, y, z, p] = q.shift();
    visited[x][y][z] = true;
    
    if (board[x][y][z] === 'E') {
      result = p;
      break;
    }
    
    for (let i = 0; i < 6; i++) {
      const [nx, ny, nz] = [x + xpos[i], y + ypos[i], z + zpos[i]];
      
      if (checkPostion(nx, ny, nz, l, r, c) && !visited[nx][ny][nz] && board[nx][ny][nz] !== '#') {
        visited[nx][ny][nz] = true;
        q.push([nx, ny, nz, p + 1]);
      }
    }
  }
  
  console.log(result ? `탈출 성공 : ${result}분` : '탈출 불가');
  

	process.exit();
});
