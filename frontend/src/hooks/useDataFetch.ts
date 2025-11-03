import { useState, useEffect } from 'react';
import axios from 'axios';

interface UseDataFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useDataFetch<T>(fetchFn: () => Promise<{ data: T }>): UseDataFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchFn();
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFn]);

  return { data, loading, error };
}