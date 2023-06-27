import React from "react";
import styles from "./styles.module.css";
import Tags from "../tags";
import { SvgArrow } from "../../assets/icons/SvgArrow";
import img from "../../assets/images/headachenew.jpg";
import SkeletonLoader from "./skeletonLoader";
import { Link } from "react-router-dom";

type cardProps = {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  pathIdentification: string;
};

const Card: React.FC<cardProps> = ({
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
    <>
      <Link
        to={`article/${pathIdentification}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={styles.cardContainer}>
          {!imageLoaded ? (
            <SkeletonLoader />
          ) : (
            <div
              style={{
                backgroundImage: `url(${imageLoaded ? image : ""})`,
              }}
              className={styles.img}
            />
          )}

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
    </>
  );
};

export default Card;
