import styles from './styles.module.css';

import { memo } from 'react';
import { Input } from 'src/components';

interface InputCleanProps {
  fontSize: string;
  fontWeight: string;
  defaultValue: string;
}

const InputClean = ({ fontSize, fontWeight, defaultValue }: InputCleanProps) => {
  const props = {
    fontSize,
    fontWeight,
    defaultValue,
    editIcon: true,
    overrideStyles: styles,
  };

  return <Input {...props} />;
};

export default memo(InputClean);
