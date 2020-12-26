import { GlobalProvider, combinedReducer, initialState } from './store/GlobalState';

import { Main } from './components';
import React from 'react';

function App() {
  return (
    <GlobalProvider deps={{ apiService: undefined }} combinedReducers={combinedReducer} initState={initialState}>
      <Main />
    </GlobalProvider>
  );
}

export default App;
