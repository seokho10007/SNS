class Heap {
	heappush(heap, el) {
		heap.push(el);

		let i = heap.length - 1;

		while (i > 0) {
			const parent = Math.trunc((i - 1) / 2);

			if (heap[i] < heap[parent]) {
				[heap[i], heap[parent]] = [heap[parent], heap[i]];
				i = parent;
			} else break;
		}
	}

	heappop(heap) {
		const res = heap.shift();

		if (heap.length === 0) return res;

		heap.unshift(heap.pop());

		let i = 0;
		while (i * 2 + 1 < heap.length) {
			let next = i;
			// 자식
			const left = i * 2 + 1;
			const right = i * 2 + 2;

			if (heap[left] < heap[next]) next = left;
			if (right < heap.length && heap[right] < heap[next]) next = right;

			if (i === next) break;
			[heap[i], heap[next]] = [heap[next], heap[i]];
			i = next;
		}
	}
}
