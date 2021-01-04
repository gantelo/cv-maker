import { useContext, useMemo } from 'react';
import { IMinimalHistory } from 'src/models/minimalHistory';
import { GlobalContext } from '../GlobalState';
import { actions } from './actions';

export const useLinks = () => {
  const { dispatch, state } = useContext(GlobalContext);

  const setSectionTitle = (value: string): void => {
    dispatch(actions.setSectionTitle(value));
  };

  const setItem = (item: IMinimalHistory, index: number): void => {
    dispatch(actions.setItem(item, index));
  };

  const addItem = (): void => {
    dispatch(actions.addItem());
  };

  const removeItem = (): void => {
    dispatch(actions.removeItem());
  };

  return useMemo(() => ({ setSectionTitle, setItem, links: state.links, addItem, removeItem }), [
    setSectionTitle,
    setItem,
    addItem,
    removeItem,
  ]);
};
