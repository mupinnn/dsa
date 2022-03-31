import CircularQueue from "./circular";

describe("Circular Queue", () => {
  let q: CircularQueue<number>;

  beforeEach(() => {
    q = new CircularQueue(5);
  });

  it("Should create empty queue with specified size (5)", () => {
    expect(q.length).toBe(5);
    expect(q.q).toEqual([null, null, null, null, null]);
  });

  it("Should check if the queue is empty", () => {
    expect(q.isEmpty()).toBe(true);
  });

  it("Should enqueue to the end of the queue", () => {
    q.enqueue(1);
    q.enqueue(2);

    expect(q.q[0]).toBe(1);
    expect(q.q[1]).toBe(2);
    expect(q.q).toEqual([1, 2, null, null, null]);
  });

  it("Should refuse to enqueue if queue reached maximum size", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    q.enqueue(6); // shouldn't be added

    expect(q.enqueue(7)).toBe("Queue is full");
    expect(q.q).toEqual([1, 2, 3, 4, 5]);
  });

  it("Should check if the queue is full", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    expect(q.isFull()).toBe(true);
  });

  it("Should get the frontmost element of the queue", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q.getHead()).toBe(1);
  });

  it("Should get the rearmost element of the queue", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q.getTail()).toBe(3);
  });

  it("Should dequeue element from the front of the queue", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    q.dequeue();

    expect(q.getHead()).toBe(2);
    expect(q.q).toEqual([null, 2, 3, null, null]);
  });

  it("Should return 'Queue is empty' when dequeue an empty queue", () => {
    q.enqueue(1);

    q.dequeue();

    expect(q.dequeue()).toBe("Queue is empty");
    expect(q.q).toEqual([null, null, null, null, null]);
  });

  it("Should fill the empty space in the front when the tail reach maximum length", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3); // [1, 2, 3, null, null]

    q.dequeue();
    q.dequeue(); // [null, null, 3, null, null]

    q.enqueue(4);
    q.enqueue(5); // [null, null, 3, 4, 5]

    q.enqueue(6);
    q.enqueue(7); // [6, 7, 3, 4, 5]

    expect(q.isFull()).toBe(true);
    expect(q.getHead()).toBe(3);
    expect(q.getTail()).toBe(7);
    expect(q.q).toEqual([6, 7, 3, 4, 5]);
  });

  it("Should handle heavy/intensive circulation", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3); // [1, 2, 3, null, null]

    q.dequeue();
    q.dequeue(); // [null, null, 3, null, null]

    q.enqueue(4);
    q.enqueue(5); // [null, null, 3, 4, 5]

    q.enqueue(6);
    q.enqueue(7); // [6, 7, 3, 4, 5]

    q.dequeue();
    q.dequeue(); // [6, 7, null, null, 5]

    q.enqueue(8); // [6, 7, 8, null, 5]

    q.dequeue(); // [6, 7, 8, null, null]

    q.enqueue(9);
    q.enqueue(10); // [6, 7, 8, 9, 10]

    q.dequeue();
    q.dequeue(); // [null, null, 8, 9, 10]

    q.enqueue(11);
    q.enqueue(12); // [11, 12, 8, 9, 10]

    q.dequeue();
    q.dequeue();
    q.dequeue(); // [11, 12, null, null, null];

    q.enqueue(13);
    q.enqueue(14);
    q.enqueue(15); // [11, 12, 13, 14, 15]

    expect(q.getHead()).toBe(11);
    expect(q.getTail()).toBe(15);
    expect(q.q).toEqual([11, 12, 13, 14, 15]);
  });
});
