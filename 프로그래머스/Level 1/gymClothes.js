function solution(n, lost, reserve) {
	const brought = Array(n).fill(1);

	lost.forEach((v) => (brought[v - 1] -= 1));
	reserve.forEach((v) => (brought[v - 1] += 1));

	for (let i = 0; i < n; i++) {
		// 여벌의 체육복을 가져왔고 양쪽 학생 (i - 1, i + 1) 중 체육복이 없는 사람이 있을 경우
		if (brought[i - 1] === 0 && brought[i] > 1) brought[i - 1]++;
		else if (brought[i + 1] === 0 && brought[i] > 1) brought[i + 1]++;

		// 주변 모두 체육복을 가져 왔더라도 여벌의 체육복을 입고있을 필요는 없으므로
		brought[i] > 1 && brought[i]--;
	}

	return brought.reduce((acc, el) => (el > 0 ? acc + 1 : acc), 0);
}
