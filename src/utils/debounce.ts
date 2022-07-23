export const debounce = (
  func: (...args: any[]) => void,
  wait: number
) => {
  let timeout: number | NodeJS.Timeout | undefined;
  return function (...args: any[]) {
    const later = function thisfunc() {
      func(args);
      console.log('debounce');
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
