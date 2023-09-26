import React from "react";
import styles from "./styles.module.css";
import { articles } from "../../../../types/article";
import ImgSkeletonLoader from "./imgSkeletonLoader";
import Tags from "../../../../components/tags";
import { SvgArrow } from "../../../../assets/icons/SvgArrow";
import Link from "next/link";

const Card: React.FC<articles> = ({
  title,
  subtitle,
  tags,
  image,
  pathIdentification,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = image;

    backgroundImage.onload = () => {
      setImageLoaded(true);
    };
  }, [image]);

  return (
    <Link
      className={styles.main}
      href={`/article?id=${pathIdentification}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {!imageLoaded ? (
        <div className={styles.img}>
          <ImgSkeletonLoader />
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${imageLoaded ? image : ""})`,
          }}
          className={styles.img}
        />
      )}
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
          <div className={styles.arrow}>
            <SvgArrow height={18} width={26} />
          </div>
        </div>
        <span className={styles.subtitle}>{subtitle}</span>
        <Tags tags={tags} classNames={{ textSize: 12 }} />
      </div>
    </Link>
  );
};

export default Card;
