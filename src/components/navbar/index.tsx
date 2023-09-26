"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import heartlogo from "../../assets/icons/heartlogo.png";
import InputSearch from "../inputSearch";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isSearchPage = pathname === "/articles";

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.titleContainer}>
          <div>
            <Link className={styles.logo} href="/">
              <img src={heartlogo?.src} width={40} />
            </Link>
          </div>
          <Link className={styles.title} href="/">
            Home
          </Link>
          <Link className={styles.title} href="/articles">
            Articles
          </Link>
          <Link className={styles.title} href="/about-us">
            About us
          </Link>
        </div>

        {!isSearchPage && <InputSearch />}
      </nav>
    </>
  );
};

export default Navbar;
