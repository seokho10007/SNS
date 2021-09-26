function solution(k, room_number) {
	const answer = [];

	const services = new Map();

	room_number.forEach((n) => {
		answer.push(nextP(services, n) - 1);
	});

	return answer;
}

const nextP = (services, x) => {
	const room = services.get(x);

	services.set(x, room ? nextP(services, room) : x + 1);
	return services.get(x);
};
