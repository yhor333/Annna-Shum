import { BrowserRouter } from 'react-router-dom';

import { Header } from './app/shared-modules/header';
import HomePage from './app/pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
