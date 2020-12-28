import './styles.css';

import { Body, Header } from 'src/components';
import React, { memo } from 'react';

const Main = () => (
  <div className="mainContainer">
    <Header />
    <Body />
  </div>
);

export default memo(Main);
