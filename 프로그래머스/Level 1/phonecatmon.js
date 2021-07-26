const solution = (nums) => {
	const uniqueMon = [...new Set(nums)];
	const maxSelect = Math.floor(nums.length / 2);

	return uniqueMon.length <= maxSelect ? uniqueMon.length : maxSelect;
};
