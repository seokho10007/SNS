// 중복되지 않는 원소로 소수 만들기
// 만들어진 소수는 중복 가능
const solution = (nums) => {
	const result = [];
	const len = nums.length;

	for (let i = 0; i < len - 2; i++) {
		for (let j = i + 1; j < len - 1; j++) {
			for (let k = j + 1; k < len; k++) {
				if (j === k) continue;
				const sum = nums[i] + nums[j] + nums[k];
				if (isPrime(sum)) result.push(sum);
			}
		}
	}

	return result.length;
};

let isPrime = (n) => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
};

const n1 = [1, 2, 3, 4];
const n2 = [1, 2, 7, 6, 4];
const n3 = [2, 4, 6];

console.log(solution(n2));
