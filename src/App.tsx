import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

render(<App />, document.getElementById('root'));
