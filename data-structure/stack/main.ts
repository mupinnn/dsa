class Stack {
  readonly size: number;
  readonly stacks: Array<unknown> = [];

  constructor(size: number) {
    this.size = size;
  }

  isEmpty() {
    return this.stacks.length === 0;
  }

  isFull() {
    return this.stacks.length === this.size;
  }

  peek() {
    return this.stacks[this.stacks.length - 1];
  }

  push(el: unknown) {
    if (this.stacks.length !== this.size) {
      this.stacks.push(el);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.stacks.pop();
  }
}

export default Stack;