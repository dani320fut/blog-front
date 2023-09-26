import React from "react";
import styles from "./styles.module.css";

const ImgSkeletonLoader: React.FC = () => {
  return (
    <div className={styles.skeletonContainer}>
      <span className={styles.skeletonItem}></span>
    </div>
  );
};

export default ImgSkeletonLoader;
