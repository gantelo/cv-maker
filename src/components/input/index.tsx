import styles from './styles.module.css';

import { memo, useState } from 'react';

import { ReactComponent as Edit } from 'src/assets/edit.svg';

//TODO: HOC inlines

interface InputProps {
  fontSize: string;
  fontWeight: string;
  overrideStyles?: any;
  editIcon?: boolean;
  placeholder?: string;
  value: string;
  setValue: (newVal: string) => void;
}

const inputName = 'name-input';

const Input = ({ fontSize, fontWeight, overrideStyles, editIcon, placeholder, value, setValue }: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [errored, setErrored] = useState(false);

  const trigger = () => setErrored(false); //add !value if we want to make this somewhat required. But i'm deprecating it for now

  const focusOn = () => setFocused(true);
  const focusOff = () => setFocused(false);

  return (
    <div className={overrideStyles?.formContainer || styles.formContainer}>
      <div className={overrideStyles?.inputContainer || styles.inputContainer}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);

            if (errored) {
              trigger();
            }
          }}
          className={`${overrideStyles?.nameContainer || styles.nameContainer} ${
            errored ? overrideStyles?.nameError || styles.nameError : ''
          } ${fontSize} ${fontWeight}`}
          name={inputName}
          autoComplete={'' + new Date().getTime()}
          onMouseEnter={focusOn}
          onMouseLeave={focusOff}
          onBlur={trigger}
          placeholder={placeholder || 'Enter title'}
        />
        <span className={overrideStyles?.underlineAnimation || styles.underlineAnimation} />
        {editIcon && (
          <Edit className={overrideStyles?.editIcon || styles.editIcon} visibility={focused ? '' : 'hidden'} />
        )}
      </div>
      <span
        className={overrideStyles?.errorMessage || styles.errorMessage}
        style={{ visibility: errored ? 'visible' : 'hidden' }}>
        Value must not be empty
      </span>
    </div>
  );
};

export default memo(Input);
