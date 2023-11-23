class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  get first() {
    return this.front.value;
  }

  isEmpty() {
    return this.front == null && this.rear === null;
  }

  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
    } else {
      const prev = this.rear;

      prev.next = node;
    }

    this.rear = node;
    this.size += 1;
  }

  shift() {
    if (this.isEmpty()) return;

    const del = this.front;
    this.front = this.front.next;

    if (!this.front) this.rear = null;

    return del.value;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.front;
    process.stdout.write("(FRONT) ");
    // when the curr hits the rear pointer is going to stop.
    // it will make curr to stop at the last node.
    while (curr != this.rear) {
      process.stdout.write(`${curr.value} ---> `);
      curr = curr.next;
    }

    process.stdout.write(`${this.rear.value} (REAR)\n`);
  }
}

const q = new Queue();

q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(4);
q.push(4);

q.display();

q.shift();
q.shift();
q.shift();

q.display();

console.log(q.front2);
