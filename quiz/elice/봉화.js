const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];


r1.on('line', function (l) {
	input.push(l.split(' ').map((e) => Number(e)));
}).on('close', function () {
  const n = Number(input.shift()[0]);
  const list = input.shift();
  const result = Array(n).fill(0);
  
  for (let i = 1; i < n; i++) {
    const now = list[i];
    for (let j = i - 1; j >= 0; j--) {
      const nx = list[j];
      if (nx >= now) {
        result[i] = j + 1;
        break;
      }
    }
  }
  console.log(result.join(' '))

  

	process.exit();
});
