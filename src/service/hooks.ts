import { useQuery } from "@tanstack/react-query";
import { getArticleByPath, getAllArticles, getArticlesBySearch } from "./fetch";

export function useGetArticle(path: string) {
  return useQuery({
    queryKey: ["getArticle"],
    queryFn: () => getArticleByPath(path),
  });
}

export function useGetAllArticle(pageSize: string) {
  return useQuery({
    queryKey: ["getAllArticle"],
    queryFn: () => getAllArticles(pageSize),
  });
}

export function useGetArticlesBySearch(pageSize: string, search: string) {
  return useQuery({
    queryKey: ["getArticlesBySearch"],
    queryFn: () => getArticlesBySearch(pageSize, search),
  });
}
