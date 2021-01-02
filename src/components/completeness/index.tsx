import './styles.css';

import { PercName } from './PercName';
import { memo } from 'react';
import { useHeader } from 'src/store/header/useHeader';

const Completeness = () => {
  const { header } = useHeader();

  return (
    <div className="completenessContainer">
      <div className="textContainer">
        <PercName percentage={header.percentage} text="Profile Completeness" />
        {/* <PercName percentage={7} text="Add X" /> */}
      </div>
      <div className="barContainer">
        <span className="percBar" style={{ width: header.percentage + '%' }} />
      </div>
    </div>
  );
};

export default memo(Completeness);
