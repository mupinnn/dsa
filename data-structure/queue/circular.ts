class CircularQueue<QueueType> {
  readonly length: number;
  readonly q: Array<QueueType>;

  constructor(length: number) {
    this.length = length;
    this.q = Array(this.length).fill(null); // create n length array
  }
}

export default CircularQueue;
