import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string, params?: object) => {
  const [data, setData] = useState<[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const fullUrl = process.env.NEXT_PUBLIC_API_URL;
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

// TODO: pegar o next cursor e criar os botoes da paginação e enviar junto
// tem q ver como fica qnd muda o texto pra pesquisar, ter q zerar o next cursor

export const useFetchSearch = (url: string, params?: object) => {
  const [data, setData] = useState<{
    articles: [];
    foundedBySeach: boolean;
  } | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const fullUrl = process.env.NEXT_PUBLIC_API_URL;

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
