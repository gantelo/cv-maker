import { useCallback, useEffect, useRef } from 'react';

const debounce = <T extends (...args: any[]) => any>(callback: T, waitFor: number) => {
  let timeout: any = 0;
  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(...args);
    }, waitFor);
    return result;
  };
};

export const useDebounce = (cb: any, delay: number) => {
  const cbRef = useRef(cb);
  useEffect(() => {
    cbRef.current = cb;
  });
  return useCallback(
    debounce((...args) => cbRef.current(...args), delay),
    [delay],
  );
};
