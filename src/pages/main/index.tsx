import React from "react";
import styles from "./styles.module.css";
import MainCard from "../../components/mainCard";
import Card from "../../components/card";
import { articles } from "../../types/article";
import { useFetch } from "../../hooks/useFetch";
import { ENDPOINTS } from "../../constants";

const Main: React.FC = () => {
  const [articles, setArticles] = React.useState<articles[]>([]);
  const [mainArticle, setMainArticle] = React.useState<articles | undefined>();

  const { data, error, loading } = useFetch(ENDPOINTS.ALL_ARTICLES);

  React.useEffect(() => {
    if (data) {
      setArticles(data?.filter((article: articles) => !article.isMainArticle));
      setMainArticle(data?.find((article: articles) => article.isMainArticle));
    }
  }, [data]);

  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Diseases Decoded</h1>
        <span className={styles.subTitle}>
          Your reliable guide to understanding, preventing, and treating medical
          conditions
        </span>
      </div>

      <MainCard
        title={mainArticle?.title}
        subtitle={mainArticle?.subtitle}
        tags={mainArticle?.tags ?? []}
        image={mainArticle?.image ?? ""}
        pathIdentification={mainArticle?.pathIdentification}
      />
      <div className={styles.cards}>
        {articles?.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
};

export default Main;
