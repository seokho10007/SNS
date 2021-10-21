function solution(enroll, referral, seller, amount) {
	const nodeInfo = getNodeInfo(enroll, referral);

	for (let i = 0; i < seller.length; i++) dfs(seller[i], amount[i] * 100, nodeInfo);

	return enroll.map(v => nodeInfo[v][1]);
}

const dfs = (seller, price, nodeInfo) => {
    const next = nodeInfo[seller][0];
    nodeInfo[seller][1] += Math.ceil(price * 0.9);
    
	if (price === 0 || next === '-') return;
    else dfs(next, Math.floor(price * 0.1), nodeInfo);
};

const getNodeInfo = (enroll, referral) => {
	const info = {};

	enroll.forEach((v, i) => {
		if (!info[v]) info[v] = [];
		info[v] = [referral[i], 0];
	});

	return info;
};
