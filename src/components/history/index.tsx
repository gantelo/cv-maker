import { useState } from 'react';

import { ReactComponent as ArrowDown } from 'src/assets/ArrowDown.svg';
import { InputFull, InputDescription } from 'src/components/index';
import styles from './styles.module.css';

const History = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.collapsible} ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}>
        <div className={styles.textContainer}>
          <div className={styles.title}>React Native Developer at MakingSense</div>
          <div className={styles.subTitle}>Jul 2020 - Present</div>
        </div>
        <ArrowDown className={`${styles.arrow} ${active ? styles.rotateIn : styles.rotateOut}`} />
      </button>
      <div className={styles.content} style={{ maxHeight: active ? '420px' : '0px' }}>
        <div className={styles.inputContainer}>
          {/* <InputFull label="Job Title" />
          <InputFull label="Employer" /> */}
        </div>
        <div className={styles.inputContainer}>
          {/* <InputFull label={'Start & End Date'} />
          <InputFull label="City" /> */}
        </div>
        <div>
          <span className={styles.label}>Describe briefly your responsibilities</span>
          {/* <InputDescription /> */}
        </div>
      </div>
    </div>
  );
};

export default History;
