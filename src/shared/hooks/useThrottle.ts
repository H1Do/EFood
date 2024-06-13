import { useRef } from 'react';

export const useThrottle = (
  callback: (...args: any[]) => any,
  milliseconds: number,
) => {
  const timerID = useRef<number>();

  if (timerID.current) {
    return;
  }

  callback();

  timerID.current = setTimeout(() => {
    clearTimeout(timerID.current);
  }, milliseconds);
};
