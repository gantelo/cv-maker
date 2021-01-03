import { useContext, useMemo } from 'react';
import { GlobalContext } from '../GlobalState';
import { actions } from './actions';

export const useProfessionalSummary = () => {
  const { dispatch, state } = useContext(GlobalContext);

  const setSectionTitle = (value: string): void => {
    dispatch(actions.setSectionTitle(value));
  };

  const setSummary = (summary: string): void => {
    dispatch(actions.setSummary(summary));
  };

  return useMemo(() => ({ setSummary, professionalSummary: state.professionalSummary, setSectionTitle }), [
    setSummary,
    setSectionTitle,
  ]);
};
