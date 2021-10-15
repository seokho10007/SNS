const findMedianSortedArrays = function (nums1, nums2) {
	let answer = 0;
	const arr = nums1.concat(nums2).sort((a, b) => a - b);
	const len = arr.length;

	if (!len) return 0;

	if (len % 2 === 0) {
		const n = len / 2;
		const m = n - 1;
    
		answer = (arr[n] + arr[m]) / 2;
	} else {
		const n = Math.floor(len / 2);

		answer = arr[n];
	}

	return answer;
};
