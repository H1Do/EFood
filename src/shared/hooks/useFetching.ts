import { useEffect, useState } from 'react';

export const useFetching = <T, A extends unknown[]>(
  request: (...args: A) => Promise<T>,
  ...args: A
): [T | null, boolean, string | null] => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    request(...args)
      .then((data) => {
        setData(data);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [...args]);

  return [data, isLoading, error];
};
