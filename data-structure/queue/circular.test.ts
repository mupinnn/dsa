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
});
