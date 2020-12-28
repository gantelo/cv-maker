import './styles.css';

import { memo, useState } from 'react';

import { ReactComponent as Edit } from 'src/assets/edit.svg';

//TODO: HOC inlines

interface InputCleanProps {
  fontSize: string;
  fontWeight: string;
  defaultValue: string;
}

const inputName = 'name-input';

const InputCleanInline = ({ fontSize, fontWeight, defaultValue }: InputCleanProps) => {
  const [focused, setFocused] = useState(false);
  const [errored, setErrored] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const trigger = () => setErrored(!value);

  const focusOn = () => setFocused(true);
  const focusOff = () => setFocused(false);

  return (
    <div className="formContainerInline">
      <div className="inputContainerInline">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);

            if (errored) {
              trigger();
            }
          }}
          className={`nameContainerInline ${errored ? 'nameErrorInline' : ''} ${fontSize} ${fontWeight}`}
          name={inputName}
          autoComplete="off"
          onMouseEnter={focusOn}
          onMouseLeave={focusOff}
          onBlur={trigger}
          placeholder="Enter title"
        />
        <span className="underline-animationInline" />
        <Edit className="editIconInline" visibility={focused ? '' : 'hidden'} />
      </div>
      {errored && <span className="errorMessageInline text-s">Value must not be empty</span>}
    </div>
  );
};

export default memo(InputCleanInline);
