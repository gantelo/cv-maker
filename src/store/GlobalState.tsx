import { IGlobalState, IReducer } from './types';
import React, { Dispatch, PropsWithChildren, createContext, memo, useReducer } from 'react';

import { Deps } from 'src/models/general';
import { combineReducers } from 'src/utils/combineReducers';
import { headerFallbackState } from './header/state';
import { reducer as headerReducer } from './header/reducer';

export const initialState: IGlobalState = {
  header: headerFallbackState(),
};

export const combinedReducer = combineReducers<IGlobalState>({
  header: headerReducer,
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
