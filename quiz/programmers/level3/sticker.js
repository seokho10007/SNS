function solution(sticker) {
	const len = sticker.length + 2;
	const dp1 = new Array(len).fill(0);
	const dp2 = new Array(len).fill(0);

	if (sticker.length === 1) return sticker[0];

	for (let i = 2; i < len - 1; i++) dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);

	for (let i = 3; i < len; i++) dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);

	return Math.max(dp1[len - 2], dp2[len - 1]);
}

// function solution(sticker) {
// 	const dp1 = Array(sticker.length).fill(0);
// 	const dp2 = Array(sticker.length).fill(0);

// 	dp1[0] = 0;
// 	dp1[1] = sticker[0];

// 	dp2[0] = 0;
// 	dp2[1] = sticker[1];

// 	for (let i = 2; i < sticker.length - 1; i++) dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
// 	for (let i = 2; i < sticker.length; i++) dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);

// 	const result = Math.max(Math.max(...dp1), Math.max(...dp2));

// 	return result;
// }
