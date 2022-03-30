import Stack from "./main";

describe("Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack(5);
  });

  it("Should create empty stack with specified size (5)", () => {
    expect(stack.size).toBe(5);
  });

  it("Should check if the stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("Should return the topmost value when peeking w/o removing it", () => {
    stack.push(1);

    expect(stack.peek()).toBe(1);
    expect(stack.size).toBe(5);
  });

  it("Should push new element to the top of the stack", () => {
    stack.push(1);
    stack.push("hai");

    expect(stack.stacks.length).toBe(2);
    expect(stack.stacks[0]).toBe(1);
    expect(stack.stacks[1]).toBe("hai");
  });

  it("Should refuse to push new element if stack reached maximum size", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6); // shouldn't added

    expect(stack.stacks.length).toBe(5);
    expect(stack.stacks[0]).toBe(1);
    expect(stack.stacks[4]).toBe(5);
  });

  it("Should check if the stack is full", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.isFull()).toBe(true);
  });

  it("Should remove element from the top of the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();

    expect(stack.peek()).toBe(2);
    expect(stack.stacks.length).toBe(2);
    expect(stack.stacks).toEqual([1, 2]);
  });

  it("Should return 'Stack is empty' when popping empty stack", () => {
    stack.push(1);

    stack.pop(); // remove 1 from stack and stack will be empty

    expect(stack.pop()).toBe("Stack is empty"); // remove nothing
    expect(stack.stacks.length).toBe(0);
  });
});
