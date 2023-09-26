import React from "react";
import styles from "./notFoundStyles.module.css";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.titleNotFound}>404</h1>
      <div className={styles.notFoundContainer}>
        <h2 className={styles.pageNotFound}>Page not found</h2>
        <div style={{ width: "80%" }}>
          <span className={styles.notFoundText}>
            Oops! It seems like you've lost your way. The page you are looking
            for cannot be found. Don't worry, these things happen.
          </span>
          <div style={{ marginTop: "15px" }}>
            <Link className={styles.linkStyle} href="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
