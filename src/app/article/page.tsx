"use client";

import React from "react";
import styles from "./styles.module.css";
import MainCard from "../../components/mainCard";
import Card from "../../components/card";
import { articles } from "../../types/article";
import { useFetch } from "../../hooks/useFetch";
import { ENDPOINTS } from "../../constants";
import SkeletonLoader from "./skeletonLoader";
import { useSearchParams } from "next/navigation";
import NotFound from "../notFound/page";

const TitleLoader: React.FC = () => {
  return (
    <div style={{ marginTop: "30px", padding: "0 10px 0 10px" }}>
      <div>
        <SkeletonLoader height={"40px"} />
      </div>
      <div style={{ marginTop: "20px", padding: "0 30px 0 30px" }}>
        <SkeletonLoader height={"20px"} />
      </div>
    </div>
  );
};

const ArticleLoader: React.FC = () => {
  return (
    <div style={{ marginTop: "30px", paddingBottom: "100px" }}>
      <div style={{ width: "300px" }}>
        <SkeletonLoader height={"30px"} />
      </div>
      <div style={{ marginTop: "25px" }}>
        {Array.from({ length: 10 })?.map((i, index) => (
          <div key={index} style={{ marginTop: "20px" }}>
            <SkeletonLoader height={"15px"} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Article: React.FC = () => {
  const [article, setArticle] = React.useState<articles | undefined>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const searchParams = useSearchParams();
  const path = searchParams.get("id");
  console.log("🚀 ~ file: page.tsx:46 ~ path:", path);

  const { data, error, loading } = useFetch(ENDPOINTS.ARTICLES_BY_PATH, {
    path,
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (data && data.length > 0) {
      setArticle(
        data?.find(({ pathIdentification }) => pathIdentification === path)
      );

      setIsLoading(false);
    }
  }, [data]);

  if ((!loading && !article) || error)
    return (
      <div>
        <NotFound />
      </div>
    );

  return (
    <div style={{ marginTop: "20px" }}>
      <header className={styles.titleContainer}>
        {!isLoading ? (
          <>
            <h1 className={styles.title}>{article?.title}</h1>
            <span className={styles.subtitle}>{article?.subtitle}</span>
          </>
        ) : (
          <TitleLoader />
        )}
      </header>

      <div className={styles.img}>
        <MainCard
          tags={article?.tags ?? []}
          image={article?.image ?? ""}
          onlyTags={true}
        />
      </div>
      {!isLoading ? (
        <article>
          <section className={styles.articleBody}>
            <h2>What is {article?.name}?</h2>
            <span className={styles.description}>{article?.description}</span>
          </section>

          <section className={styles.articleBody}>
            <h2>Main symptoms of {article?.name}:</h2>
            <ul className={styles.description}>
              <div style={{ marginTop: "-20px" }}>
                {article?.symptoms?.map((symptom) => (
                  <li key={symptom}>{symptom}</li>
                ))}
              </div>
            </ul>
          </section>

          <section className={styles.articleBody}>
            <h2> Tips to help you with {article?.name}:</h2>
            <ul className={styles.description}>
              <div style={{ marginTop: "-20px" }}>
                {article?.tips?.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </div>
            </ul>
          </section>

          <section
            className={styles.articleBody}
            style={{ paddingBottom: "200px" }}
          >
            <h2>Affected area: </h2>
            <span className={styles.description}>{article?.area}</span>
          </section>
        </article>
      ) : (
        <ArticleLoader />
      )}
    </div>
  );
};

export default Article;
