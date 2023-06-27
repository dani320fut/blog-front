import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/main";
import Article from "../pages/article";
import Navbar from "../components/navbar";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/article/:path", element: <Article /> },
      ],
      errorElement: <>error</>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Router;
