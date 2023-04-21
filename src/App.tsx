import { BrowserRouter } from 'react-router-dom';

import { Header } from './app/shared-modules/header';
import HomePage from './app/pages/home';
import { Footer } from './app/modules/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HomePage />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
