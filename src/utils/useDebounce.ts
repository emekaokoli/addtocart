import React from 'react';

export const useDebounce = (value: number, delay: number) => {
  const [debouncedValue, setDebouncedValue] =
    React.useState<number>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
