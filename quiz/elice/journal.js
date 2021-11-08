const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
    const n = parseInt(input[0]);
    const list = input[1].split(' ').map((el) => parseInt(el));
        
    let sum = 0;
    
    const result = list.map((el, i) => {
        if (i !== 0) {
            const prev = el * (i + 1) - sum;
            sum += prev;
            return prev;
        }
        
        sum += el;
        return el;
    })
    ;
    console.log(result.join(' '));

  process.exit();
});
