class Heap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  get peek() {
    this.heap[0];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

class MinHeap extends Heap {
  constructor() {
    super();
  }

  insert(value) {
    this.heap.push(value);
    this.#bubbleUp();
  }

  remove() {
    if (this.size === 1) {
      return this.heap.pop();
    }

    const del = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#bubbleDown();

    return del;
  }

  #bubbleUp() {
    let currentIdx = this.size - 1;
    let parentIndex = this.getParentIndex(currentIdx);

    while (this.heap[parentIndex] && this.heap[parentIndex] > this.heap[currentIdx]) {
      this.swap(parentIndex, currentIdx);
      currentIdx = parentIndex;
      parentIndex = this.getParentIndex(currentIdx);
    }
  }

  #bubbleDown() {
    let currentIdx = 0;

    let leftIdx = this.getLeftChildIndex(currentIdx);
    let rightIdx = this.getRightChildIndex(currentIdx);

    const MAX = Number.MAX_SAFE_INTEGER;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[currentIdx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[currentIdx])
    ) {
      let nextIdx = (this.heap[leftIdx] ?? MAX) > (this.heap[rightIdx] ?? MAX) ? rightIdx : leftIdx;

      this.swap(currentIdx, nextIdx);
      currentIdx = nextIdx;
      leftIdx = this.getLeftChildIndex(currentIdx);
      rightIdx = this.getRightChildIndex(currentIdx);
    }
  }
}

class MaxHeap extends Heap {
  constructor() {
    super();
  }

  insert(value) {
    this.heap.push(value);
    this.#bubbleUp();
  }

  remove() {
    if (this.size === 1) {
      return this.heap.pop();
    }

    const del = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#bubbleDown();

    return del;
  }

  #bubbleUp() {
    let currentIdx = this.size - 1;
    let parentIndex = this.getParentIndex(currentIdx);

    while (this.heap[parentIndex] && this.heap[parentIndex] < this.heap[currentIdx]) {
      this.swap(parentIndex, currentIdx);
      currentIdx = parentIndex;
      parentIndex = this.getParentIndex(currentIdx);
    }
  }

  #bubbleDown() {
    let currentIdx = 0;

    let leftIdx = this.getLeftChildIndex(currentIdx);
    let rightIdx = this.getRightChildIndex(currentIdx);

    const MAX = Number.MAX_SAFE_INTEGER;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx] > this.heap[currentIdx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[currentIdx])
    ) {
      let nextIdx = (this.heap[leftIdx] ?? MAX) < (this.heap[rightIdx] ?? MAX) ? rightIdx : leftIdx;

      this.swap(currentIdx, nextIdx);
      currentIdx = nextIdx;
      leftIdx = this.getLeftChildIndex(currentIdx);
      rightIdx = this.getRightChildIndex(currentIdx);
    }

    console.log(this.heap);
  }
}

const minHeap = new MinHeap();

console.log("MIN HEAP");

minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(2);
minHeap.insert(4);
minHeap.insert(1);

console.log(minHeap.heap);

minHeap.remove();
minHeap.remove();

console.log(minHeap.heap);

console.log("MAX HEAP");

const maxHeap = new MaxHeap();

maxHeap.insert(1);
maxHeap.insert(5);
maxHeap.insert(1);
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(1);
maxHeap.insert(38);

console.log(maxHeap.heap);

maxHeap.remove();
maxHeap.remove();
maxHeap.remove();

console.log(maxHeap.heap);
