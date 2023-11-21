class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    // 힙의 마지막 위치에 요소를 추가
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    // 힙의 가장 작은 노드를 재가
    const value = this.heap[0];

    // 가장 마지막에 있는 노드를 루트로 저장
    this.heap[0] = this.heap.pop();

    //
    this.bubbleDown();

    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    // 부모노드와 새로 추가된 노드의 값을 비교
    // 만약 새로 추가된 노드의 값이 부모노드의 값보다 작다면
    while (this.heap[parentIdx] && this.heap[index][1] < this.heap[parentIdx][1]) {
      // 교환
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[smallerIdx][1]) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);

      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

const heap = new MinHeap();

heap.add([3, 5]);
heap.add([2, 4]);
heap.add([3, 5]);
heap.add([5, 1]);
heap.add([3, 2]);

console.log(heap);
