import './styles.css';

import { Body, Header } from 'src/sections';
import React, { memo } from 'react';

const Main = () => (
  <div className="mainContainer">
    <Header />
    {/* <Body /> */}
  </div>
);

export default memo(Main);
