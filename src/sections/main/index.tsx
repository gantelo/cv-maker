import './styles.css';

import { Body, Header } from 'src/sections';
import React, { memo } from 'react';

const Main = () => (
  <div className="massiveContainer">
    <div className="mainContainer">
      <Header />
      <Body />
    </div>
    <div className="latexContainer"></div>
  </div>
);

export default memo(Main);
