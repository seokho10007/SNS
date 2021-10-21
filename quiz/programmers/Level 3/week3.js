const xpos = [1, -1, 0, 0];
const ypos = [0, 0, 1, -1];

const solution = (game_board, table) => {
	// 테이블, 게임보드 방문여부 저장
	const visited = [];
	for (let i = 0; i < 2; i++)
		visited[i] = Array(table.length)
			.fill()
			.map((_) => Array(table[0].length).fill(false));

	// 도형 저장
	const pieces = [];
	// 빈공간 저장
	const emptyPlace = [];

	for (let i = 0; i < table.length; i++) {
		// 각각 조건에 따라 함수를 호출하여 도형 모양을 추출
		// 저장된 도형의 인덱스를 통일시키는 함수를 호출하여 반환값을 배열에 저장
		for (let j = 0; j < table[i].length; j++) {
			if (table[i][j] === 1 && !visited[0][i][j]) {
				const arr = checkTable([i, j], table, visited[0], [], 1);
				pieces.push(changeValue(arr, table));
			}
			if (game_board[i][j] === 0 && !visited[1][i][j]) {
				const arr = checkTable([i, j], game_board, visited[1], [], 0);
				emptyPlace.push(changeValue(arr, game_board));
			}
		}
	}

	const remainHoles = emptyPlace.filter((place) => {
		let targetHole = place.slice();
		for (let i = 0; i < 4; i++) {
			const sliceIndex = pieces.findIndex((piace) => {
				// 테이블 블럭과 보드의 빈 공간이 완벽하게 일치하는 경우
				const sub = subtractPath(targetHole, piace);
				// 반환된 값이 null이 아니고(존재하며) 배열의 길이가 0 일경우(완벽하게 일치할 경우)
				return sub != null && sub.length == 0;
			});

			// 일치할 경우 해당 요소를 제거하고 다음요소로 넘어감
			if (sliceIndex >= 0) {
				pieces.splice(sliceIndex, 1);
				return false;
			}

			// 해당 도형이 하지 않을경우 도형을 회전하여 실행
			if (i < 3) targetHole = rotate90(targetHole);
		}
		return true;
	});

	// 채워야할 공간
	const pointCount = emptyPlace.reduce((prev, hole) => prev + hole.length, 0);

	// 채우지 못한 공간
	const count = remainHoles.reduce((acc, el) => acc + el.length, 0);

	// 채운 공간 = 채워야할 공간 - 채우지 못한 공간
	return pointCount - count;
};

const rotate90 = (points) => {
	let maxY = 0;

	points.forEach((point) => {
		if (point[1] > maxY) maxY = point[1];
	});

	// [x, y] => [최대 y - y, x] 로 변환 (반시계방향 회전)
	return points.map((point) => [maxY - point[1], point[0]]);
};

// 테이블 도형의 x, y 값과 게임 보드 빈칸의 x, y가 일치하는지 검사
const isSamePoint = (point1, point2) => point1[0] === point2[0] && point1[1] === point2[1];

// 두 도형이 일치하는지 검사하는 함수
const subtractPath = (path1, path2) => {
	if (path1.length != path2.length) return null;
	const path1Copy = path1.slice();
	const path2Copy = path2.slice();

	// 두 요소가 완벽하게 일치하는지 확인
	while (path2Copy.length) {
		const point2 = path2Copy.pop();
		const pointIndex = path1Copy.findIndex((point1) => isSamePoint(point1, point2));

		// 일치하지 못할 경우 반복문 중지 후 null을 반환
		if (pointIndex < 0) return null;

		// 일치할 경우 요소 제거
		path1Copy.splice(pointIndex, 1);
	}

	// 제거되고 남은 요소를 반환 (빈배열일 경우 완벽하게 일치)
	return path1Copy;
};

// 도형의 위치를 반환하는 함수
const checkTable = (loc, table, visited, arr, n) => {
	const [x, y] = loc;

	// 해당 좌표를 방문처리하고 배열에 저장
	visited[x][y] = true;
	arr.push(loc);

	for (let i = 0; i < xpos.length; i++) {
		const [nextX, nextY] = [x + xpos[i], y + ypos[i]];
		if (nextX >= 0 && nextX < table.length && nextY >= 0 && nextY < table.length) {
			// 조건에 일치할 경우(도형이 연결되어 있을경우) 재귀함수 실행
			if (!visited[nextX][nextY] && table[nextX][nextY] === n) {
				checkTable([nextX, nextY], table, visited, arr, n);
			}
		}
	}
	return arr;
};

// 도형의 위치를 재정비하는 함수
const changeValue = (arr, table) => {
	let minIndexes = [table.length - 1, table[0].length - 1];

	// [x, y] 들이 저장되어있는 배열에서 x와 y 각가의 최소값을 저장
	arr.forEach((point) => {
		if (point[0] < minIndexes[0]) minIndexes[0] = point[0];
		if (point[1] < minIndexes[1]) minIndexes[1] = point[1];
	});

	// 최소값만큼 감소한 배열을 반환
	return arr.map((point) => {
		point[0] -= minIndexes[0];
		point[1] -= minIndexes[1];
		return point;
	});
};
