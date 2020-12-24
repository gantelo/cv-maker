import React, { createContext, memo, PropsWithChildren, useReducer, Dispatch, useState } from 'react';

import { IGlobalState, IReducer } from './types';
import { combineReducers } from 'src/utils/combineReducers';
import { Deps } from 'src/models/general';

export const initialState: IGlobalState = {
  header: { name: '', nationality: '', title: '' },
};

export const combinedReducer = combineReducers<IGlobalState>({
  header: () => {},
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
