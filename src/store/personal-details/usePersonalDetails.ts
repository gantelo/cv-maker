import { useContext, useMemo } from 'react';
import { PersonalDetails } from 'src/models/general';
import { GlobalContext } from '../GlobalState';
import { actions } from './actions';

export const usePersonalDetails = () => {
  const { dispatch, state } = useContext(GlobalContext);

  const setValue = (inputName: PersonalDetails, newValue: string): void => {
    dispatch(actions[inputName](newValue));
  };

  return useMemo(() => ({ setValue, personalDetails: state.personalDetails }), [setValue]);
};
