const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const inp = [];

r1.on('line', function (l) {
  inp.push(l.split(' ').map(e => Number(e)));
}).on('close', function () {
  const [n, k] = inp.shift();
  const ts = [0].concat(inp.shift());
  const info = {};
  const c = inp[inp.length - 1];
  
  for (let i = 0; i < k; i++) {
    const [a, b] = inp[i];
    if (!info[b]) info[b] = [];
    info[b].push(a);
  }
  
  for (let i = 1; i <= n; i++) {
    const connect = info[i];
    
    if (!info[i]) continue;
    
    const timeToConnectList = connect.map((el) => ts[el]);
    ts[i] += Math.max(...timeToConnectList)
  }
  
  console.log(ts[c])
  
	process.exit();
});
