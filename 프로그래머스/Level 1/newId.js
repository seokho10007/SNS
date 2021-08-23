function solution(new_id) {
	new_id = new_id
		.toLowerCase()
		.replace(/[^\w-_.]/g, '')
		.split('')
		.reduce((acc, el) => (el === '.' && acc[acc.length - 1] === '.' ? acc : (acc += el)), '')
		.replace(/^[.]/, '')
		.replace(/[.]$/, '');

	new_id === '' && (new_id = 'a');
	new_id.length >= 16 && (new_id = new_id.slice(0, 15).replace(/[.]$/, ''));

	while (new_id.length <= 2) new_id += new_id[new_id.length - 1];

	return new_id;
}

// 다름 사람 
// function solution(new_id) {
//    const answer = new_id
//        .toLowerCase() // 1
//        .replace(/[^\w-_.]/g, '') // 2
//        .replace(/\.+/g, '.') // 3
//        .replace(/^\.|\.$/g, '') // 4
//        .replace(/^$/, 'a') // 5
//        .slice(0, 15).replace(/\.$/, ''); // 6
//    const len = answer.length;
//    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
