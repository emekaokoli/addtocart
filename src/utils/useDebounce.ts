import { useEffect, useState } from 'react';

export const useDebounce = (value: number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<number>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
