import { useContext, useMemo } from 'react';
import { GlobalContext } from '../GlobalState';
import { actions } from './actions';

export const useHeader = () => {
  const { dispatch, state } = useContext(GlobalContext);

  const setName = (name: string): void => {
    dispatch(actions.setName(name));
  };

  const setPercentage = (perc: number): void => {
    dispatch(actions.setPercentage(perc));
  };

  return useMemo(() => ({ setName, setPercentage, header: state.header }), [setPercentage, setName]);
};
