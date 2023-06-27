import React from "react";
import styles from "./styles.module.css";

const SkeletonLoader: React.FC = () => {
  return (
    <div>
      <span className={styles.skeletonItem}></span>
    </div>
  );
};

export default SkeletonLoader;
