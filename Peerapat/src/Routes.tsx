import { Route, Routes } from 'react-router-dom';
import { Homepage, Portfolio } from './pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Portfolio />} />
      <Route path="/work" element={<Portfolio />} />
    </Routes>
  );
};

export default AppRoutes;
