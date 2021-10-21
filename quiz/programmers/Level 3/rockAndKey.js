function solution(key, lock) {
	// 자물쇠가 모두 1일 경우 이미 열려있는 자물소;
	if (lock.every((el) => !el.includes(0))) return true;

   // key를 90도로 4번 돌린 열쇠 
	const list = rotate(key);

   // 기존 보드에서 3배 확장
	const extended = expandArr(lock);

   // 자물소의 크기 만큼
	for (let i = 0; i < list.length; i++) {
		const check = checkArr(list[i], extended);
		if (check) return true;
	}

	return false;
}

const checkArr = (key, lock) => {
	for (let i = 0; i <= lock.length - key.length; i++) {
		for (let j = 0; j <= lock.length - key.length; j++) {
			const copy = lock.map((v) => v.slice());

			key.forEach((el, idx1) => {
				el.forEach((v, idx2) => {
					copy[i + idx1][j + idx2] += v;
				});
			});

			const check = isMatched(copy);

			if (check) return true;
		}
	}
	return false;
};

const isMatched = (lock) => {
	const length = lock.length / 3;

	for (let i = length; i < length * 2; i++) {
		for (let j = length; j < length * 2; j++) {
			if (lock[i][j] != 1) return false;
		}
	}
	return true;
};

const expandArr = (arr) => {
	const result = [];
	const len = arr.length * 3;

	for (let i = 0; i < len; i++) {
		result[i] = [];
		const x = i - arr.length;
		for (let j = 0; j < len; j++) {
			const y = j - arr.length;
			if (x >= 0 && x < arr.length && y >= 0 && y < arr.length) result[i][j] = arr[x][y];
			else result[i][j] = 0;
		}
	}

	return result;
};

const rotate = (arr) => {
	const list = [];
	const n = arr.length;
	const m = arr[0].length;

	// 4번 회전 (0, 90, 180, 270)
	for (let k = 0; k < 4; k++) {
		const result = Array(n)
			.fill(0)
			.map((_) => Array(m).fill(0));
		for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) result[j][n - i - 1] = arr[i][j];

		list.push(arr);
		arr = result;
	}

	return list;
};
