import { useState } from 'react';
import styles from './styles.module.css';

interface InputDescriptionProps {}

const InputFull = ({}: InputDescriptionProps) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <textarea
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className={`${styles.nameContainer} text-m text-normal`}
            name="description-text"
            autoComplete="off"
            wrap="hard"
          />
          <span className={styles.underlineAnimation} />
        </div>
      </div>
    </div>
  );
};

export default InputFull;
