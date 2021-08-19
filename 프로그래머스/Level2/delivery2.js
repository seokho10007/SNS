const solution = (N, road, K) => {
	if (road.length === 0) return 0;

	const connectInfo = makeConnectInfo(road);
	const priceInfo = Array(N + 1).fill(Infinity);

	const queue = [];
	queue.push([1, 0]);
	priceInfo[1] = 0;

	while (queue.length) {
		const [to, price] = queue.shift();

		const connectNode = connectInfo[to];

		if (connectNode.length > 0) {
			connectNode.forEach((e) => {
				const [from, nextPrice] = e;

				if (priceInfo[from] > priceInfo[to] + nextPrice) {
					priceInfo[from] = priceInfo[to] + nextPrice;
					queue.push(e);
				}
			});
		}
	}

	return priceInfo.filter((v) => v <= K).length;
};

const makeConnectInfo = (road) => {
	const info = {};

	for (let i = 0; i < road.length; i++) {
		const [node1, node2, price] = road[i];
		if (!info.hasOwnProperty(node1)) info[node1] = [[node2, price]];
		else info[node1].push([node2, price]);

		if (!info.hasOwnProperty(node2)) info[node2] = [[node1, price]];
		else info[node2].push([node1, price]);
	}

	return info;
};
