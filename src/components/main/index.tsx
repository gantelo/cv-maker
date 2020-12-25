import React, { memo } from 'react';
import { Header } from 'src/components';
import './styles.css';

const Main = () => (
  <div className="mainContainer">
    <Header />
  </div>
);

export default memo(Main);
