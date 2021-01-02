import { Input } from 'src/components';
import styles from './styles.module.css';

interface InputFullProps {
  label?: string;
  value: string;
  setValue: (newVal: string) => void;
}

const InputFull = ({ label, value, setValue }: InputFullProps) => {
  const props = {
    fontSize: 'text-m',
    fontWeight: 'text-normal',
    editIcon: false,
    overrideStyles: styles,
    placeholder: label,
    value,
    setValue,
  };

  return (
    <div className={styles.container}>
      {Boolean(label) && <span className={styles.label}>{label}</span>}
      <Input {...props} />
    </div>
  );
};

export default InputFull;
