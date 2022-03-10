import React from "react";
import AboutPage from "pages/about/AboutPage";
import HomePage from "pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import { ABOUT_PATH, ROOT } from "./CONSTANT";
import NotFound from "pages/error/NotFound";

interface Props {}

const RouterConfig = (props: Props) => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route path={ROOT} element={<HomePage />} />
        <Route path={ABOUT_PATH} element={<AboutPage />} />

        {/* List all private/auth routes here */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
