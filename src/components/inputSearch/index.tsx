import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import SvgSearch from "../../assets/icons/SvgSearch";

const InputSearch: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>("");
  const searchRef = React.createRef<HTMLAnchorElement>();

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      searchRef?.current?.click();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="search"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={handleKeypress}
      />
      <div className={styles.buttonSearch}>
        <Link
          ref={searchRef}
          className={styles.title}
          href={`/articles?search=${searchText}`}
        >
          <SvgSearch width={14} />
        </Link>
      </div>
    </div>
  );
};

export default InputSearch;
