const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
    const list = input[0].split(' ');
    let result = 0;      
    
    list.forEach((el) => {
        const n = el.split("").reverse().join("");
        result += parseInt(n)
    })

    console.log(result);
});
