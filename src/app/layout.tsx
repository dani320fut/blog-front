import Navbar from "../components/navbar";
import QueryProvider from "../providers/queryProvider";
import styles from "./styles.module.css";
import React from "react";

export const metadata = {
  title: "Diseases Decoded",
  description: "Diseases Decoded",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={styles.root}>
          <Navbar />
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
