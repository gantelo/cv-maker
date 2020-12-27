import './styles.css';

import { memo, useState } from 'react';

import { ReactComponent as Edit } from 'src/assets/edit.svg';

interface InputCleanProps {
  fontSize: string;
}

const inputName = 'name-input';

const InputClean = ({ fontSize }: InputCleanProps) => {
  const [focused, setFocused] = useState(false);
  const [errored, setErrored] = useState(false);
  const [value, setValue] = useState('');

  const trigger = () => setErrored(!value);

  const focusOn = () => setFocused(true);
  const focusOff = () => setFocused(false);

  return (
    <div className="formContainer">
      <div className="inputContainer">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);

            if (errored) {
              trigger();
            }
          }}
          className={`nameContainer ${errored ? 'nameError' : ''} ${fontSize}`}
          name={inputName}
          autoComplete="off"
          onMouseEnter={focusOn}
          onMouseLeave={focusOff}
          onBlur={trigger}
          placeholder="Enter your name"
        />
        <span className="underline-animation" />
        <Edit className="editIcon" visibility={focused ? '' : 'hidden'} />
      </div>
      {errored && <span className="errorMessage text-s">Value must not be empty</span>}
    </div>
  );
};

export default memo(InputClean);
