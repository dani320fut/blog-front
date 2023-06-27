import React from "react";
import styles from "./styles.module.css";

const Tags: React.FC<{ tags: string[]; classNames?: { textSize: number } }> = ({
  tags,
  classNames,
}) => {
  return (
    <div className={styles.tagsContainer}>
      {tags?.map((tag) => (
        <div
          key={tag}
          className={styles.tags}
          style={{ fontSize: `${classNames?.textSize ?? 16}px` }}
        >
          <span className={styles.text}>{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default Tags;
