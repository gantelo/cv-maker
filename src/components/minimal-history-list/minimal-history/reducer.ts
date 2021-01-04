import { IMinimalHistory, MinimalHistory } from 'src/models/minimalHistory';

import { IAction } from 'src/store/types';

export const reducer = (state: IMinimalHistory, { type, payload }: IAction): IMinimalHistory => {
  switch (type) {
    case MinimalHistory.NAME:
      return { ...state, [MinimalHistory.NAME]: payload };
    case MinimalHistory.VALUE:
      return { ...state, [MinimalHistory.VALUE]: payload };
    default:
      return state;
  }
};

export const initialState: IMinimalHistory = {
  [MinimalHistory.NAME]: '',
  [MinimalHistory.VALUE]: '',
};
