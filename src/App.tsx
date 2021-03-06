import React, { FC } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

const App: FC = () => {
  return (
    <>
      <Layout />

      <GlobalStyles />
    </>
  );
};

export default App;
