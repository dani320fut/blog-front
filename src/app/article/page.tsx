"use client";

import React from "react";
import styles from "./styles.module.css";
import MainCard from "../../components/mainCard";
import SkeletonLoader from "./skeletonLoader";
import { useSearchParams } from "next/navigation";
import NotFound from "../notFound/page";
import { useGetArticle } from "../../service/hooks";

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
  const searchParams = useSearchParams();
  const path = searchParams.get("id");

  const { data, error, isLoading } = useGetArticle(path ?? "");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if ((!isLoading && !data) || error)
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
            <h1 className={styles.title}>{data?.title}</h1>
            <span className={styles.subtitle}>{data?.subtitle}</span>
          </>
        ) : (
          <TitleLoader />
        )}
      </header>

      <div className={styles.img}>
        <MainCard
          tags={data?.tags ?? []}
          image={data?.image ?? ""}
          onlyTags={true}
        />
      </div>
      {!isLoading ? (
        <article>
          <section className={styles.articleBody}>
            <h2>What is {data?.name}?</h2>
            <span className={styles.description}>{data?.description}</span>
          </section>

          <section className={styles.articleBody}>
            <h2>Main symptoms of {data?.name}:</h2>
            <ul className={styles.description}>
              <div style={{ marginTop: "-20px" }}>
                {data?.symptoms?.map((symptom) => (
                  <li key={symptom}>{symptom}</li>
                ))}
              </div>
            </ul>
          </section>

          <section className={styles.articleBody}>
            <h2> Tips to help you with {data?.name}:</h2>
            <ul className={styles.description}>
              <div style={{ marginTop: "-20px" }}>
                {data?.tips?.map((tip) => (
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
            <span className={styles.description}>{data?.area}</span>
          </section>
        </article>
      ) : (
        <ArticleLoader />
      )}
    </div>
  );
};

export default Article;
