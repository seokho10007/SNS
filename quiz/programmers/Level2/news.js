function solution(str1, str2) {
	let union = 0;
	let intersection = 0;

	const [strElement1, info1] = getElement(str1);
	const [strElement2, info2] = getElement(str2);

	const elementType = [...new Set([...strElement1, ...strElement2])];

	elementType.forEach((v) => {
		if (info1[v] && !info2[v]) union += info1[v];
		else if (info2[v] && !info1[v]) union += info2[v];
		else if (info1[v] && info2[v]) union += Math.max(info2[v], info1[v]);
	});

	elementType.forEach((v) => {
		if (info1[v] && info2[v]) intersection += Math.min(info2[v], info1[v]);
	});

	if (intersection === 0 && union === 0) return 65536;

	return Math.floor((intersection / union) * 65536);
}

const getElement = (str) => {
	const list = [];
	const element = {};
	str = str.toUpperCase();

	for (let i = 0; i < str.length - 1; i++) {
		const s = str[i] + str[i + 1];
		if (s.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s0-9]/g) === null) {
			if (!(s in element)) element[s] = 0;
			element[s] += 1;
			list.push(s);
		}
	}

	return [list, element];
};
