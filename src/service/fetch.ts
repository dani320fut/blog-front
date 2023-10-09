import { ENDPOINTS } from "../constants";
import { articles } from "../types/article";

const fullUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

export function getArticleByPath(path: string): Promise<articles> {
  return fetch(fullUrl + ENDPOINTS.ARTICLES_BY_PATH + `?path=${path}`).then(
    (res) => res.json()
  );
}

export function getAllArticles(pageSize: string): Promise<articles[]> {
  return fetch(fullUrl + ENDPOINTS.ALL_ARTICLES + `?pageSize=${pageSize}`).then(
    (res) => res.json()
  );
}

export function getArticlesBySearch(
  pageSize: string,
  search: string
): Promise<{ articles: articles[][]; foundedBySeach: boolean }> {
  return fetch(
    fullUrl +
      ENDPOINTS.ARTICLES_BY_SEARCH +
      `?pageSize=${pageSize}&search=${search}`
  ).then((res) => res.json());
}
