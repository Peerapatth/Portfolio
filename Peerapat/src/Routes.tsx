import { Route, Routes } from "react-router-dom";
import { Homepage, Portfolio } from "./pages";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AppRoutes = () => {
  useEffect(() => {
    AOS.init();
  }), [];
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Portfolio />} />
      <Route path="/work" element={<Portfolio />} />
    </Routes>
  );
};

export default AppRoutes;
