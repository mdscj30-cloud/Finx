import { useState, useEffect, useCallback } from 'react';

export function useSupabaseQuery(queryFn, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const executeQuery = useCallback(async (retries = 3, backoff = 1000) => {
    setLoading(true);
    setError(null);

    try {
      // Implement a 5-second timeout for the query
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), 5000)
      );

      const result = await Promise.race([queryFn(), timeoutPromise]);

      if (result && result.error) {
        throw result.error;
      }

      setData(result?.data || result);
    } catch (err) {
      console.error(`[Supabase Query Error]:`, err);
      if (retries > 0) {
        console.warn(`Retrying in ${backoff}ms... (${retries} retries left)`);
        setTimeout(() => {
          executeQuery(retries - 1, backoff * 2);
        }, backoff);
        return;
      }
      setError(err);
    } finally {
      if (retries === 0 || !error) {
        setLoading(false);
      }
    }
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    executeQuery();
  }, [executeQuery]);

  return { data, loading, error, retry: () => executeQuery() };
}