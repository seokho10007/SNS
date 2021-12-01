const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let [n, k] = [0, 0];
const inp = [];

rl.on('line', function (x) {
  if (n === 0) [n, k] = x.split(' ').map(e => parseInt(e));
  else inp.push(parseInt(x));
}).on('close', function () {
  const arr = [];
  
  // 각 요소간의 거리를 저장
  for (let i = 0; i < n - 1; i++) arr.push(inp[i + 1] - inp[i]);
  
  // 정렬
  arr.sort((a, b) => a - b);
  
  // k - 1개 만큼 배열에서 제거
  // 최소거리만 남게됨
  for (let i = 0; i < k - 1; i++) arr.pop();
  
  // 성냥의 개수만큼 1을 
  for (let i = 0; i < k; i++) arr.push(1);
  
  console.log(arr.reduce((a, c) => a + c, 0));

	process.exit();
});

