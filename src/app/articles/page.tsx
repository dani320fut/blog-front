"use client";

import React from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { articles } from "../../types/article";
import { useFetchSearch } from "../../hooks/useFetch";
import { ENDPOINTS } from "../../constants";
import Card from "./fragments/card";
import SvgSearch from "../../assets/icons/SvgSearch";
import CardSkeletonLoader from "./fragments/card/cardSkeletonLoader";
import { SvgRightArrow } from "../../assets/icons/SvgRightArrow";
import { useSearchParams } from "next/navigation";

const CardsLoader: React.FC = () => {
  return (
    <>
      {Array.from({ length: 10 })?.map((i, index) => (
        <div key={index}>
          <hr
            style={{
              backgroundColor: "lightgray",
              height: "1px",
              border: "none",
            }}
          />
          <div style={{ margin: "25px 0 25px 0" }}>
            <CardSkeletonLoader />
          </div>
        </div>
      ))}
    </>
  );
};

const SeachArticles: React.FC = () => {
  const [allArticles, setAllArticles] = React.useState<articles[][]>([]);
  const [articles, setArticles] = React.useState<articles[]>([]);
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = React.useState("");
  const [isNewLoading, setIsNewLoading] = React.useState(false);
  const [foundedBySearch, setFoundedBySearch] = React.useState(false);
  const [lastSearch, setLastSearch] = React.useState("");
  const [pageObject, setPageObject] = React.useState<{
    pageIndex: number;
    limit: number;
  }>({ pageIndex: 0, limit: 1 });

  const searchRef = React.createRef<HTMLAnchorElement>();

  const { data, error, loading } = useFetchSearch(
    ENDPOINTS.ARTICLES_BY_SEARCH,
    {
      pageSize: "10",
      search: searchParams.get("search"),
    }
  );

  React.useEffect(() => {
    const search = searchParams.get("search") ?? "";
    setSearchInput(search);
    setLastSearch(search);
  }, []);

  React.useEffect(() => {
    if (data) {
      setAllArticles(data?.articles);
      setArticles(data?.articles[pageObject.pageIndex]);
      setFoundedBySearch(data.foundedBySeach);
      setPageObject({ pageIndex: 0, limit: data?.articles?.length - 1 });
    }
  }, [data]);

  React.useEffect(() => {
    if (allArticles) {
      setArticles(allArticles[pageObject.pageIndex]);
      window.scrollTo(0, 0);
    }
  }, [pageObject.pageIndex]);

  const handleSearchInput = (event: any) => {
    if (event.keyCode === 13) {
      searchRef?.current?.click();
    }
  };

  const fetchSearchInput = async () => {
    setIsNewLoading(true);
    const fullUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(fullUrl + ENDPOINTS.ARTICLES_BY_SEARCH, {
      params: { search: searchInput, pageSize: "10" },
    });

    setAllArticles(response?.data?.articles);
    setArticles(response?.data?.articles[0]);
    setFoundedBySearch(response?.data?.foundedBySeach);
    setLastSearch(searchInput);
    setPageObject({
      pageIndex: 0,
      limit: response?.data?.articles?.length - 1,
    });
    setIsNewLoading(false);
  };

  return (
    <div className={styles.main}>
      <h2>Search</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "-10px",
        }}
      >
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            value={searchInput ?? ""}
            type="text"
            placeholder="What am I looking for..."
            onChange={(event) => setSearchInput(event?.target.value)}
            onKeyUp={handleSearchInput}
          />
          <div className={styles.buttonSearch}>
            <span
              ref={searchRef}
              className={styles.title}
              onClick={fetchSearchInput}
            >
              <SvgSearch width={14} />
            </span>
          </div>
        </div>
      </div>
      {!loading && !isNewLoading && lastSearch && (
        <div
          style={{
            marginTop: "15px",
          }}
        >
          <span className={styles.resultText}>
            {foundedBySearch ? "Results of " : "No results found for "}"
            {lastSearch}"
          </span>
        </div>
      )}
      <div className={styles.cardsContainter}>
        {loading || isNewLoading ? (
          <CardsLoader />
        ) : (
          <>
            {articles?.map((article) => (
              <div key={article.title}>
                <hr
                  style={{
                    backgroundColor: "lightgray",
                    height: "1px",
                    border: "none",
                  }}
                />
                <div className={styles.card}>
                  <Card {...article} />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className={styles.paginationContainer}>
        <div
          className={styles.arrowContainer}
          style={{
            opacity: pageObject.pageIndex > 0 ? "1" : "0.5",
            cursor: pageObject.pageIndex > 0 ? "" : "not-allowed",
          }}
          onClick={() => {
            if (pageObject.pageIndex > 0) {
              setPageObject({
                pageIndex: pageObject.pageIndex - 1,
                limit: pageObject.limit,
              });
            }
          }}
        >
          <div className={styles.leftArrow}>
            <SvgRightArrow height={16} fill="#BBC2CB" />
          </div>
          <span className={styles.paginationText}>Previous</span>
        </div>
        <div
          className={styles.arrowContainer}
          style={{
            opacity: pageObject.pageIndex < pageObject.limit ? "1" : "0.5",
            cursor:
              pageObject.pageIndex < pageObject.limit ? "" : "not-allowed",
          }}
          onClick={() => {
            if (pageObject.pageIndex < pageObject.limit) {
              setPageObject({
                pageIndex: pageObject.pageIndex + 1,
                limit: pageObject.limit,
              });
            }
          }}
        >
          <span className={styles.paginationText}>Next</span>
          <div className={styles.rightArrow}>
            <SvgRightArrow height={16} fill="#BBC2CB" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeachArticles;
