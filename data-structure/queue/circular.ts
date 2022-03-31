class CircularQueue<QueueType> {
  readonly length: number;
  readonly q: Array<QueueType | null>;
  private head: number = -1;
  private tail: number = -1;

  constructor(length: number) {
    this.length = length;
    this.q = Array(this.length).fill(null); // create n length array
  }

  isEmpty() {
    return this.head < 0 && this.tail < 0;
  }

  isFull() {
    return (
      (this.tail === this.length - 1 && this.head === 0) ||
      this.tail == this.head - 1
    );
  }

  getHead() {
    return this.q[this.head];
  }

  getTail() {
    return this.q[this.tail];
  }

  enqueue(el: QueueType) {
    if (this.isFull()) {
      return "Queue is full";
    } else {
      if (this.tail === this.length - 1 && this.head !== 0) {
        this.tail = 0;
        return (this.q[this.tail] = el);
      }
    }

    if (this.isEmpty()) {
      this.head++;
    }

    this.tail++;
    this.q[this.tail] = el;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    this.q[this.head] = null;
    this.head++;

    if (this.head > this.tail) {
      this.head = this.tail = -1;
    }
  }
}

export default CircularQueue;
