import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import MainCard from "../../components/mainCard";
import Card from "../../components/card";
import { articles } from "../../types/article";
import { useFetch } from "../../hooks/useFetch";
import { ENDPOINTS } from "../../constants";

const Article: React.FC = () => {
  const [article, setArticle] = React.useState<articles | undefined>();

  const { path } = useParams();

  const { data, error, loading } = useFetch(ENDPOINTS.ARTICLES_BY_PATH, {
    path,
  });

  React.useEffect(() => {
    if (data && data.length > 0) {
      setArticle(
        data?.find(({ pathIdentification }) => pathIdentification === path)
      );
    }
  }, [data]);

  return (
    <div>
      <header className={styles.titleContainer}>
        <h1 className={styles.title}>{article?.title}</h1>
        <span className={styles.subtitle}>{article?.subtitle}</span>
      </header>

      <div className={styles.img}>
        <MainCard
          tags={article?.tags ?? []}
          image={article?.image ?? ""}
          onlyTags={true}
        />
      </div>
      <article>
        <section className={styles.articleBody}>
          <h2>What is {article?.name}?</h2>
          <span className={styles.description}>{article?.description}</span>
        </section>

        <section className={styles.articleBody} style={{ marginTop: "14px" }}>
          <h2>Main symptoms of {article?.name}:</h2>
          <ul className={styles.description}>
            <div style={{ marginTop: "-20px" }}>
              {article?.symptoms?.map((symptom) => (
                <li>{symptom}</li>
              ))}
            </div>
          </ul>
        </section>

        <section className={styles.articleBody} style={{ marginTop: "14px" }}>
          <h2> Tips to help you with {article?.name}:</h2>
          <ul className={styles.description}>
            <div style={{ marginTop: "-20px" }}>
              {article?.tips?.map((tip) => (
                <li>{tip}</li>
              ))}
            </div>
          </ul>
        </section>

        <section
          className={styles.articleBody}
          style={{ marginTop: "14px", paddingBottom: "200px" }}
        >
          <h2>Affected area: </h2>
          <span className={styles.description}>{article?.area}</span>
        </section>
      </article>
    </div>
  );
};

export default Article;
