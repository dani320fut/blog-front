import React from "react";
import styles from "./styles.module.css";
import Tags from "../tags";
import SkeletonLoader from "./skeletonLoader";
import { Link } from "react-router-dom";

type mainCardProps = {
  title?: string;
  subtitle?: string;
  tags: string[];
  image: string;
  pathIdentification?: string;
  onlyTags?: boolean;
};

const MainCard: React.FC<mainCardProps> = ({
  title,
  subtitle,
  tags,
  image,
  pathIdentification,
  onlyTags = false,
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
      {!imageLoaded && <SkeletonLoader />}
      {imageLoaded && (
        <Link
          to={`article/${pathIdentification}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className={styles.textContainer}>
              {!onlyTags && (
                <>
                  <span className={styles.title}>{title}</span>
                  <span className={styles.subtitle}>{subtitle}</span>
                </>
              )}
              <Tags tags={tags} />
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MainCard;
