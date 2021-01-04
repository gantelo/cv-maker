import { memo, useEffect, useReducer, useState } from 'react';

import { ReactComponent as ArrowDown } from 'src/assets/ArrowDown.svg';
import { InputFull, InputDescription } from 'src/components/index';
import { History, IHistory } from 'src/models/history';
import { useDebounce } from 'src/utils/debounce';
import { initialState, reducer } from './reducer';
import styles from './styles.module.css';

interface HistoryComponentProps {
  setItem: (item: IHistory) => void;
}

const HistoryComponent = ({ setItem }: HistoryComponentProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [active, setActive] = useState(false);

  const abstractInput = (field: History) => {
    return {
      label: field,
      value: state[field],
      setValue: (value: string) => {
        dispatch({ type: field, payload: value });
      },
    };
  };

  const debouncedHistoryItemUpdate = useDebounce(() => {
    setItem(state);
  }, 1000);

  useEffect(debouncedHistoryItemUpdate, [state]);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.collapsible} ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            {state[History.JOB_TITLE]} at {state[History.EMPLOYER]}
          </div>
          <div className={styles.subTitle}>{state[History.START_END_DATE]}</div>
        </div>
        <ArrowDown className={`${styles.arrow} ${active ? styles.rotateIn : styles.rotateOut}`} />
      </button>
      <div className={styles.content} style={{ maxHeight: active ? '420px' : '0px' }}>
        <div className={styles.inputContainer}>
          <InputFull {...abstractInput(History.JOB_TITLE)} />
          <InputFull {...abstractInput(History.EMPLOYER)} />
        </div>
        <div className={styles.inputContainer}>
          <InputFull {...abstractInput(History.START_END_DATE)} />
          <InputFull {...abstractInput(History.CITY)} />
        </div>
        <div>
          <span className={styles.label}>Describe briefly your responsibilities</span>
          <InputDescription {...abstractInput(History.DESCRIPTION)} />
        </div>
      </div>
    </div>
  );
};

export default memo(HistoryComponent);
