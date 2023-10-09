"use client";

import React from "react";
import styles from "./styles.module.css";
import MainCard from "../../components/mainCard";
import Card from "../../components/card";
import { articles } from "../../types/article";
import { SvgArrow } from "../../assets/icons/SvgArrow";
import Link from "next/link";
import CardSkeletonLoader from "./cardSkeletonLoader";
import { useGetAllArticle } from "../../service/hooks";

const CardsSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 6 })?.map((i, index) => (
        <CardSkeletonLoader key={index} />
      ))}
    </>
  );
};

const Main: React.FC = () => {
  const [articles, setArticles] = React.useState<articles[]>([]);
  const [mainArticle, setMainArticle] = React.useState<articles | undefined>();

  const { data, error, isLoading } = useGetAllArticle("7");

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

      <div className={styles.mainArticles}>
        <h2 className={styles.title} style={{ fontSize: "24px" }}>
          Main articles
        </h2>

        <div className={styles.cards}>
          {articles?.length > 0 && !isLoading ? (
            <>
              {articles?.map((card) => (
                <Card key={card.pathIdentification} {...card} />
              ))}
            </>
          ) : (
            <CardsSkeleton />
          )}
        </div>
        <Link className={styles.seeAllContainer} href="/articles">
          <span className={styles.seeAll}>See all</span>
          <SvgArrow height={18} width={20} />
        </Link>
      </div>
    </div>
  );
};

export default Main;
