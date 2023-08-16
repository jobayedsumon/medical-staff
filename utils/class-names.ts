// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classNames = (...classes: any[]): string => {
  return classes.filter(Boolean).join(' ');
};
