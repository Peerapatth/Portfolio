import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;