import React from "react";
import styles from "./styles.module.css";

const SkeletonLoader: React.FC<{ height?: string }> = ({ height }) => {
  return (
    <div className={styles.skeletonContainer}>
      <span className={styles.skeletonItem} style={{ height: height }}></span>
    </div>
  );
};

export default SkeletonLoader;
