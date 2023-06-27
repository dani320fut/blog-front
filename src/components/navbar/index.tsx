import React from "react";
import styles from "./styles.module.css";
import { Link, Outlet } from "react-router-dom";
import heartlogo from "../../assets/icons/heartlogo.png";
import SvgSearch from "../../assets/icons/SvgSearch";

const Navbar: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>("");
  const searchRef = React.createRef<HTMLAnchorElement>();

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      searchRef?.current?.click();
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.titleContainer}>
          <div>
            <Link className={styles.logo} to="/">
              <img src={heartlogo} width={40} />
            </Link>
          </div>
          <Link className={styles.title} to="/">
            Home
          </Link>
          <Link className={styles.title} to="/">
            Articles
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="search"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={handleKeypress}
          />
          <div className={styles.buttonSearch}>
            {/* colocar o texto na url */}
            <Link
              ref={searchRef}
              className={styles.title}
              to={`/articles?find=${searchText}`}
            >
              <SvgSearch width={14} />
            </Link>
          </div>
        </div>

        {/* criar o layout e dps mexer nessa questao de pesquisar, ele vai escrever o titulo e vai ser redirecionado com o escrito na url */}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
