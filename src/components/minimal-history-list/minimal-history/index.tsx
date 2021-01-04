import { memo, useEffect, useReducer, useState } from 'react';

import { ReactComponent as ArrowDown } from 'src/assets/ArrowDown.svg';
import { InputFull } from 'src/components/index';
import { MinimalHistory, IMinimalHistory } from 'src/models/minimalHistory';
import { useDebounce } from 'src/utils/debounce';
import { initialState, reducer } from './reducer';
import styles from './styles.module.css';

interface MinimalHistoryComponentProps {
  setItem: (item: IMinimalHistory) => void;
  nameOnly?: boolean;
}

const MinimalHistoryComponent = ({ setItem, nameOnly }: MinimalHistoryComponentProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [active, setActive] = useState(false);

  const abstractInput = (field: MinimalHistory) => {
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
          <div className={styles.title}>{state[MinimalHistory.NAME] || 'Describe Field'}</div>
          {!nameOnly && <div className={styles.subTitle}>{state[MinimalHistory.VALUE]}</div>}
        </div>
        <ArrowDown className={`${styles.arrow} ${active ? styles.rotateIn : styles.rotateOut}`} />
      </button>
      <div className={styles.content} style={{ maxHeight: active ? '420px' : '0px' }}>
        <div className={styles.inputContainer}>
          <InputFull {...abstractInput(MinimalHistory.NAME)} />
          {!nameOnly && <InputFull {...abstractInput(MinimalHistory.VALUE)} />}
        </div>
      </div>
    </div>
  );
};

export default memo(MinimalHistoryComponent);
