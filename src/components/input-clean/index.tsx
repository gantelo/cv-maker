import './styles.css';

import { ReactComponent as Edit } from 'src/assets/edit.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const InputClean = () => {
  const [focused, setFocused] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const focusOn = () => setFocused(true);
  const focusOff = () => setFocused(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputContainer">
        <input
          type="text"
          defaultValue="Input Name"
          className="nameContainer"
          name="name"
          ref={register({ required: true })}
          autoComplete="off"
          onMouseEnter={focusOn}
          onMouseLeave={focusOff}
        />
        <span className="underline-animation" />
        <Edit className="editIcon" visibility={focused ? '' : 'hidden'} />
      </div>
    </form>
  );
};

export default InputClean;
