import styles from './styles.module.css';

import { memo } from 'react';

import { Input } from 'src/components';

interface InputCleanProps {
  fontSize: string;
  fontWeight: string;
  value: string;
  setValue: Function;
}

const InputClean = ({ fontSize, fontWeight, value, setValue }: InputCleanProps) => {
  const props = {
    fontSize,
    fontWeight,
    editIcon: true,
    defaultValue: '',
    overrideStyles: styles,
    value,
    setValue,
  };

  return <Input {...props} />;
};

export default memo(InputClean);
