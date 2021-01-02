import styles from './styles.module.css';

import { memo } from 'react';
import { Input } from 'src/components';

interface InputCleanProps {
  fontSize: string;
  fontWeight: string;
  defaultValue: string;
  label?: string;
  value: string;
  setValue: (newVal: string) => void;
}

const InputClean = ({ fontSize, fontWeight, defaultValue, label, value, setValue }: InputCleanProps) => {
  const props = {
    fontSize,
    fontWeight,
    defaultValue,
    editIcon: true,
    overrideStyles: styles,
    value,
    setValue,
  };

  return (
    <div>
      <Input {...props} />
      {Boolean(label) && <span className={styles.headerLabel}>{label}</span>}
    </div>
  );
};

export default memo(InputClean);
