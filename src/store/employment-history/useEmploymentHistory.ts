import { useContext, useMemo } from 'react';
import { IHistory } from 'src/models/general';
import { GlobalContext } from '../GlobalState';
import { actions } from './actions';

export const useEmploymentHistory = () => {
  const { dispatch, state } = useContext(GlobalContext);

  const setSectionTitle = (value: string): void => {
    dispatch(actions.setSectionTitle(value));
  };

  const setItem = (item: IHistory, index: number): void => {
    dispatch(actions.setItem(item, index));
  };

  const addItem = (): void => {
    dispatch(actions.addItem());
  };

  const removeItem = (): void => {
    dispatch(actions.removeItem());
  };

  return useMemo(
    () => ({ setSectionTitle, setItem, employmentHistory: state.employmentHistory, addItem, removeItem }),
    [setSectionTitle, setItem, addItem, removeItem],
  );
};
