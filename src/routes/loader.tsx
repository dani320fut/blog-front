import { ENDPOINTS } from "../constants";
import { useFetch } from "../hooks/useFetch";

type articles = {
  title: string;
  subtitle: string;
  tags: string[];
  symptoms: string[];
  tips: string[];
  area: string;
  description: string;
  pathIdentification: string;
  name: string;
  isMainArticle: boolean;
  image: string;
};

export const getArticles = async () => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + ENDPOINTS.ALL_ARTICLES
  ).then((response) => {
    return response.json();
  });

  return response;
};
