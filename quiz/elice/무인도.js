const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];


r1.on('line', function (line) {
	input.push(line.split(' ').map(el => Number(el)));
}).on('close', function () {
  const [n, k] = input.shift();
  
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    const [w, v] = input[i - 1];
    
    for (let j = 1; j <= k; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= w) {
        // 총 무게가 w인 i - 1개의 물건의 가치와
        // 총 무게가 w인 i개의 물건의 가치를 비교
        dp[i][j] = Math.max(v + dp[i - 1][j - w], dp[i - 1][j]);
      }
    }
  }
  console.log(dp[n][k])
});

