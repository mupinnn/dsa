class Stack<StackType> {
  readonly size: number;
  readonly stacks: Array<StackType> = [];

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

  push(el: StackType) {
    if (this.isFull()) {
      return "Stack is full";
    }

    return this.stacks.push(el);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.stacks.pop();
  }
}

export default Stack;
