import Queue from "./main";

describe("Queue", () => {
  let q: Queue<number | string>;

  beforeEach(() => {
    q = new Queue(5);
  });

  it("Should create empty queue with specified size (5)", () => {
    expect(q.length).toBe(5);
  });

  it("Should check if the queue is empty", () => {
    expect(q.isEmpty()).toBe(true);
  });

  it("Should enqueue to the end of the queue", () => {
    q.enqueue(1);
    q.enqueue(2);

    expect(q.q.length).toBe(2);
    expect(q.q[0]).toBe(1);
    expect(q.q[1]).toBe(2);
  });

  it("Should refuse to enqueue if queue reached maximum size", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    q.enqueue(6); // shouldn't be added

    expect(q.enqueue(7)).toBe("Queue is full");
    expect(q.q.length).toBe(5);
    expect(q.q[0]).toBe(1);
    expect(q.q[4]).toBe(5);
  });

  it("Should check if the queue is full", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    expect(q.isFull()).toBe(true);
  });

  it("Should return the frontmost value when peeking w/o removing it", () => {
    q.enqueue(1);
    q.enqueue(2);

    expect(q.peek()).toBe(1);
    expect(q.length).toBe(5);
  });

  it("Should dequeue element from the front of the queue", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    q.dequeue();

    expect(q.peek()).toBe(2);
    expect(q.q.length).toBe(2);
    expect(q.q).toEqual([2, 3]);
  });

  it("Should return 'Queue is empty' when dequeue an empty queue", () => {
    q.enqueue(1);

    q.dequeue(); // remove 1 from queue and queue will be empty

    expect(q.dequeue()).toBe("Queue is empty");
    expect(q.q.length).toBe(0);
  });
});
