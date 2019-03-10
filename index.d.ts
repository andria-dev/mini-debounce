declare function debounce(
  callback: Function,
  timeout: number
): (...args: any[]) => NodeJS.Timeout | number;
export { debounce };
