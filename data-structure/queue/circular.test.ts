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

  it.todo("Should return 'Queue is empty' when dequeue an empty queue");

  it.todo(
    "Should fill the empty space in the front when the tail reach maximum length"
  );
});
