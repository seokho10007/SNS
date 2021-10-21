const solution = (a) => {
	let answer = 1;

	let n = a.length;
	let left = 0,
		right = n - 1;

	let leftMin = a[left],
		rightMin = a[right];

	while (left < right) {
		if (leftMin > rightMin) {
			left++;
			if (a[left] < leftMin) answer++;

			leftMin = Math.min(leftMin, a[left]);
		} else {
			right--;
			if (a[right] < rightMin) answer++;
			rightMin = Math.min(rightMin, a[right]);
		}
	}

	return answer;
};
