import { useEffect, useState } from 'react';

export const useFetching = <T>(
  request: (...args: any[]) => Promise<T>,
  ...args: any[]
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    request(...args)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [...args]);

  return [data, isLoading, error];
};
