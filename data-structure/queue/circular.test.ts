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
});
