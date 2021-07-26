const solution = (nums) => {
	const set = new Set();
	const len = nums.length;

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < nums.length; j++) if (j !== 0) set.add(nums[0] + nums[j]);
		nums.splice(0, 1);
	}

	return [...set].sort((a, b) => a - b);
};

const n1 = [2, 1, 3, 4, 1];
console.log(solution(n1));
