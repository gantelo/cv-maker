import './styles.css';

import React, { memo } from 'react';

import { Header } from 'src/components';

const Main = () => (
  <div className="mainContainer">
    <Header />
  </div>
);

export default memo(Main);
