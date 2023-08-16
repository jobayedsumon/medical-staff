export const toUnique = <T>(value: T, idx: number, arr: T[]) =>
  arr.indexOf(value) === idx;
