const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n = 0;
const inp = [];

rl.on('line', function (x) {
	if (n === 0) n = parseInt(x);
	else inp.push(x.split(' ').map((e) => Number(e)));
}).on('close', function () {
  inp.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  
	let result = 0;
  let conference = 0;
  
  for (let i = 0; i < n; i++) {
    const [start, end] = inp[i];
    if (conference > start) continue;
    result++;
    conference = end;
  }
  
  console.log(result)

	process.exit();
});

