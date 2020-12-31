import styles from './styles.module.css';

import { memo } from 'react';

import { Input } from 'src/components';

interface InputCleanProps {
  fontSize: string;
  fontWeight: string;
}

const InputClean = ({ fontSize, fontWeight }: InputCleanProps) => {
  const props = {
    fontSize,
    fontWeight,
    editIcon: true,
    defaultValue: '',
    overrideStyles: styles,
  };

  return <Input {...props} />;
};

export default memo(InputClean);
