import Stack from "./main";

describe("Stack", () => {
  it("Should create empty stack with specified size (5)", () => {
    const stack = new Stack(5);
    expect(stack.size).toBe(5);
  });

  it("Should check if the stack is empty", () => {
    const stack = new Stack(5);
    expect(stack.isEmpty()).toBe(true);
  });

  it("Should return the topmost value when peeking w/o removing it", () => {
    const stack = new Stack(5);
    stack.push(1);

    expect(stack.peek()).toBe(1);
    expect(stack.size).toBe(5);
  });

  it("Should push new element to the top of the stack", () => {
    const stack = new Stack(5);
    stack.push(1);
    stack.push("hai");

    expect(stack.stacks.length).toBe(2);
    expect(stack.stacks[0]).toBe(1);
    expect(stack.stacks[1]).toBe("hai");
  });

  it("Should refuse to push new element if stack reached maximum size", () => {
    const stack = new Stack(5);
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
    const stack = new Stack(1);
    stack.push(1);

    expect(stack.isFull()).toBe(true);
  });

  it("Should remove element from the top of the stack", () => {
    const stack = new Stack(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();

    expect(stack.peek()).toBe(2);
    expect(stack.stacks.length).toBe(2);
    expect(stack.stacks).toEqual([1, 2]);
  });

  it("Should return 'Stack is empty' when popping empty stack", () => {
    const stack = new Stack(1);
    stack.push(1);

    stack.pop(); // remove 1 from stack and stack will be empty

    expect(stack.pop()).toBe("Stack is empty"); // remove nothing
    expect(stack.stacks.length).toBe(0);
  });
});
