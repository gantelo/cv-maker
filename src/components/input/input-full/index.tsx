import { Input } from 'src/components';
import styles from './styles.module.css';

interface InputFullProps {
  label: string;
}

const InputFull = ({ label }: InputFullProps) => {
  const props = {
    fontSize: 'text-m',
    fontWeight: 'text-normal',
    defaultValue: '',
    editIcon: false,
    overrideStyles: styles,
    placeholder: label,
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <Input {...props} />
    </div>
  );
};

export default InputFull;
