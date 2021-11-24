import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import InfoPage from "./Pages/InfoPage";
import MainPage from "./Pages/MainPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
