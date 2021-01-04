import { IGlobalState, IReducer } from './types';
import React, { Dispatch, PropsWithChildren, createContext, memo, useReducer } from 'react';

import { Deps } from 'src/models/general';
import { combineReducers } from 'src/utils/combineReducers';
import { headerFallbackState } from './header/state';
import { reducer as headerReducer } from './header/reducer';
import { reducer as personalDetailsReducer } from './personal-details/reducer';
import { reducer as professionalSummaryDetailsReducer } from './professional-summary/reducer';
import { reducer as employmentHistoryReducer } from './employment-history/reducer';
import { reducer as educationHistoryReducer } from './education-history/reducer';
import { personalDetailsFallbackState } from './personal-details/state';
import { professionalSummaryFallbackState } from './professional-summary/state';
import { employmentHistoryFallbackState } from './employment-history/state';
import { educationHistoryFallbackState } from './education-history/state';

export const initialState: IGlobalState = {
  header: headerFallbackState(),
  personalDetails: personalDetailsFallbackState(),
  professionalSummary: professionalSummaryFallbackState(),
  employmentHistory: employmentHistoryFallbackState(),
  educationHistory: educationHistoryFallbackState(),
};

export const combinedReducer = combineReducers<IGlobalState>({
  header: headerReducer,
  personalDetails: personalDetailsReducer,
  professionalSummary: professionalSummaryDetailsReducer,
  employmentHistory: employmentHistoryReducer,
  educationHistory: educationHistoryReducer,
});

export const GlobalContext = createContext<{
  state: IGlobalState;
  dispatch: Dispatch<any>;
  deps: Deps;
}>({
  state: initialState,
  dispatch: () => null,
  deps: { apiService: null },
});

export const GlobalProvider = memo(
  ({
    children,
    initState,
    combinedReducers,
    deps,
  }: PropsWithChildren<{
    initState: IGlobalState;
    combinedReducers: IReducer<IGlobalState>;
    deps: Deps;
  }>) => {
    const [state, dispatch] = useReducer(combinedReducers, initState);

    return (
      <GlobalContext.Provider
        value={{
          state,
          dispatch,
          deps,
        }}>
        {children}
      </GlobalContext.Provider>
    );
  },
);
