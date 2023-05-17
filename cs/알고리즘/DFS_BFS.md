# DFS

-  그래프 완전 탐색 기법중 하나
-  그래프의 시작노드에서 출발하여 탐색할 한쪽 분기를 정하여 최대 깊이까지 탐색을 마친후 다른 쪽 분기로 이동하여 탐색을 수행하는 알고리즘

| 기능             | 특징                                 | 시간복잡도(노드 수: V, 예지 수: E) |
| ---------------- | ------------------------------------ | ---------------------------------- |
| 그래프 완전 탐색 | 재귀 함수로 구현, 스택 자료구조 이용 | O(V + E)                           |

-  실제 구현시 재귀 함수를 이용하므로 스택 오버플로에 유의
-  단절점 찾기, 단절선 찾기, 사이클 찾기, 위상정렬 등에 활용

위상정렬이란

-  방향 그래프의 모든 노드를 방향성에 거스르지 않도록 순서대로 나열하는 것
-  위상정렬은 DAG(Directed Acyclic Graph)에만 적용 가능

## 핵심이론

-  DFS는 한번 방문한 노드를 다시 방문하면 안되므로 노드 방문 여부를 체크할 배열이 필요
-  그래프는 인접 리스트로 표현

인접리스트란

-  그래프를 표현하는 방법중 하나
-  각 노드에 연결된 노드들을 리스트로 표현

## 구현

```js
// 인접리스트

const graph = [[2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

// 방문 여부 체크 배열

const visited = Array.from({ length: 9 }, () => false);

// DFS 함수

function dfs(graph, v, visited) {
	visited[v] = true;
	console.log(v);
	for (let i = 0; i < graph[v].length; i++) {
		const node = graph[v][i];
		if (!visited[node]) {
			dfs(graph, node, visited);
		}
	}
}

// 실행

dfs(graph, 1, visited);
```

# BFS

-  그래프를 완전 탐색하는 방법 중 하나
-  시작 노드에서 출발해 시작 노드를 기준으로 가까운 노드를 먼저 방문하면서 탐색하는 알고리즘

| 기능             | 특징                      | 시간복잡도(노드 수: V, 예지 수: E) |
| ---------------- | ------------------------- | ---------------------------------- |
| 그래프 완전 탐색 | FIFO 탐색, Queue 자료구조 | O(V + E)                           |

-  선입선출 방식으로 탐색하므로 큐를 이용해 구현
-  탐색 시작 노드와 가까운 노드를 우선하여 탐색하므로 목표노드에 도찹하는 경로가 여러개 일때 최단 경로를 보장
-  최단 경로를 구할 때 활용

## 핵심이론

-  BFS는 한번 방문한 노드를 다시 방문하면 안되므로 노드 방문 여부를 체크할 배열이 필요
-  그래프는 인접 리스트로 표현

## 구현

```js
// 인접리스트

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

// 방문 여부 체크 배열

const visited = Array.from({ length: 9 }, () => false);

// BFS 함수

function bfs(graph, start, visited) {
	const queue = [start];

	visited[start] = true;

	while (queue.length) {
		const v = queue.shift();

		console.log(v);
		for (let i = 0; i < graph[v].length; i++) {
			const node = graph[v][i];
			if (!visited[node]) {
				queue.push(node);
				visited[node] = true;
			}
		}
	}
}
```

연결리스트를 통해 큐 구현

```js
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}

	dequeue() {
		if (!this.head) {
			return null;
		}
		const data = this.head.data;
		this.head = this.head.next;
		this.size--;
		return data;
	}

	isEmpty() {
		return this.size === 0;
	}
}
```
