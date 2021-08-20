// const solution = (jobs) => {
// 	const len = jobs.length;

// 	jobs.sort((a, b) => {
// 		if (a[0] === b[0]) return a[1] - b[1];
// 		else return a[0] - b[0];
// 	});

// 	const queue = [jobs.shift()];
// 	let end = 0;

// 	let sum = 0;

// 	while (queue.length) {
// 		const job = queue.shift();

// 		// 작업 실행 중 요청이 들어왔을 때
// 		if (end > job[0]) {
// 			sum += end - job[0] + job[1];
// 			end = end + job[1];
// 		} else {
// 			sum += job[1];
// 			end = job[0] + job[1];
// 		}

// 		if (jobs.length) {
// 			const nextJobs = [];

// 			while (jobs.length) {
// 				if (jobs[0][0] > end) break;
// 				else nextJobs.push(jobs.shift());
// 			}

// 			if (nextJobs.length === 0) {
// 				queue.push(jobs.shift());
// 			} else if (nextJobs.length === 1) {
// 				queue.push(nextJobs[0]);
// 			} else {
// 				nextJobs.sort((a, b) => {
// 					return end - a[0] + a[1] - (end - b[0] + b[1]);
// 				});
// 				queue.push(...nextJobs);
// 			}
// 		}
// 	}

// 	return Math.floor(sum / len);
// };

function solution(jobs) {
	const length = jobs.length;
	const disk = [];
	let time = 0;
	let finishingTime = 0;
	let totalWaitedTime = 0;

	jobs.sort((a, b) => a[0] - b[0]);

	while (disk.length || jobs.length) {
		while (jobs[0] && jobs[0][0] <= time) {
			const item = jobs.shift();
			disk.push([item[1], item[0]]);
		}

		disk.sort((a, b) => a[0] - b[0]);

		if (disk.length) {
			const item = disk.shift();
			finishingTime = time + item[0];
			totalWaitedTime += finishingTime - item[1];
			time = finishingTime;
		} else {
			time = jobs[0][0];
		}
	}
	return Math.floor(totalWaitedTime / length);
}

const list = [
	[
		[0, 10],
		[2, 10],
		[25, 10],
		[25, 2],
	],
];

// 10 18 21 17  = 66
// 10 11 28 17 =

for (let i = 0; i < list.length; i++) {
	console.log('-----------', i);
	console.log(solution(list[i]));
}

// 이전 작업 종료시간 - 기존 요청 시간 + 작업 소요 시간

// 10 12 11 17
