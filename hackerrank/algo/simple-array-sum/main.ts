function simpleArraySum(arr: number[]): number {
  return arr.reduce((prev, next) => prev + next, 0);
}

export default simpleArraySum;
