import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string, params?: object) => {
  const [data, setData] = useState<[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const fullUrl = process.env.REACT_APP_API_URL;
      try {
        const response = await axios.get(
          fullUrl + url,
          params ? { params: { ...params } } : {}
        );
        setData(response?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};
