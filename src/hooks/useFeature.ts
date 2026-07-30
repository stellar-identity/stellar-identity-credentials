import { useState, useEffect } from 'react';

export function useFeature() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData({ active: true });
      setLoading(false);
    }, 1000);
  }, []);
  
  return { data, loading };
}
