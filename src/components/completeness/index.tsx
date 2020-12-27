import './styles.css';

import { PercName } from './PercName';

const Completeness = () => {
  return (
    <div className="completenessContainer">
      <div className="textContainer">
        <PercName percentage={15} text="Profile Completeness" />
        <PercName percentage={7} text="Add X" />
      </div>
      <div className="barContainer">
        <span className="percBar" style={{ width: 15 + '%' }} />
      </div>
    </div>
  );
};

export default Completeness;
