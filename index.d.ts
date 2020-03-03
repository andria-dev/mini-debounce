declare function debounce(
  callback: Function,
  timeout: number
): (...args: any[]) => ReturnType<typeof setTimeout>;
export { debounce };
