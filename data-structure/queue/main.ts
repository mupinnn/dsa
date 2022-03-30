class Queue<QueueType> {
  readonly length: number;
  readonly q: Array<QueueType> = [];

  constructor(length: number) {
    this.length = length;
  }

  isEmpty() {
    return this.q.length === 0;
  }

  isFull() {
    return this.q.length === this.length;
  }

  peek() {
    return this.q[0];
  }

  enqueue(el: QueueType) {
    if (this.isFull()) {
      return "Queue is full";
    }

    return this.q.push(el);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.q.shift();
  }
}

export default Queue;
