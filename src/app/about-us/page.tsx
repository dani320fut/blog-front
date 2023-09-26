import React from "react";
import styles from "./styles.module.css";

const AboutUs: React.FC = () => {
  return (
    <div className={styles.main}>
      <h2>About Us</h2>
      <div className={styles.textContainer}>
        <span className={styles.textAboutUs}>
          Welcome to our blog Diseases Decoded.
        </span>
        <span className={styles.textAboutUs}>
          Our goal is to provide reliable and detailed information about various
          diseases, including their specifications, symptoms, and other relevant
          aspects. We understand that health is an important concern for
          everyone, which is why we aim to offer an educational and informative
          resource.
        </span>
        <span className={styles.textAboutUs}>
          It is important to note that all the content presented on our blog is
          the result of extensive research conducted through artificial
          intelligence and data analysis. However, it is crucial to understand
          that this website is only a study resource and does not replace
          medical consultation. If you are experiencing specific symptoms or
          have concerns about your health, we strongly recommend seeking a
          qualified healthcare professional. Only a doctor can provide an
          accurate diagnosis and appropriate guidance for your individual case.
        </span>
        <span className={styles.textAboutUs}>
          Our goal is to empower readers to better understand diseases,
          promoting greater awareness and education about health. We hope you
          find valuable information on our blog that helps you take better care
          of yourself and your loved ones.
        </span>
        <span className={styles.textAboutUs}>
          Always remember that information is a powerful tool when used
          correctly. We encourage you to use this website as an educational
          resource, but always keep in mind the importance of consulting a
          healthcare professional for any specific concerns.
        </span>
        <span className={styles.textAboutUs}>
          We appreciate your visit to our blog on diseases and hope you find the
          content helpful and enlightening. Feel free to explore the different
          articles and share our website with others interested in learning more
          about health.
        </span>
        <span className={styles.textAboutUs}> Take care and be well! </span>
        <span className={styles.textAboutUs}>Diseases Decoded Team</span>
      </div>
    </div>
  );
};

export default AboutUs;
