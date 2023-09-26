import React from "react";
import styles from "./styles.module.css";

const CardSkeletonLoader: React.FC = () => {
  return (
    <div className={styles.skeletonContainer}>
      <span className={styles.skeletonImgItem}></span>
      <div className={styles.skeletonTextsContainer}>
        <span className={styles.skeletonTextItem}></span>
        <span className={styles.skeletonMiniTextItem}></span>
        <span className={styles.skeletonMiniTextItemSecond}></span>
        <div style={{ display: "flex" }}>
          <span className={styles.skeletonTagsItem}></span>
          <span className={styles.skeletonTagsItem}></span>
          <span className={styles.skeletonTagsItem}></span>
          <span className={styles.skeletonTagsItem}></span>
        </div>
      </div>
    </div>
  );
};

export default CardSkeletonLoader;
