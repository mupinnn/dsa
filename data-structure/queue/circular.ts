class CircularQueue<QueueType> {
  readonly length: number;
  readonly q: Array<QueueType>;
  private head: number = -1;
  private tail: number = -1;

  constructor(length: number) {
    this.length = length;
    this.q = Array(this.length).fill(null); // create n length array
  }

  isEmpty() {
    return this.head < 0 && this.tail < 0;
  }
}

export default CircularQueue;
