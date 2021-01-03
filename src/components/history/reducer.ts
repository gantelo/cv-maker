import { History, IHistory } from 'src/models/general';

import { IAction } from 'src/store/types';

export const reducer = (state: IHistory, { type, payload }: IAction): IHistory => {
  switch (type) {
    case History.JOB_TITLE:
      return { ...state, [History.JOB_TITLE]: payload };
    case History.EMPLOYER:
      return { ...state, [History.EMPLOYER]: payload };
    case History.START_END_DATE:
      return { ...state, [History.START_END_DATE]: payload };
    case History.DESCRIPTION:
      return { ...state, [History.DESCRIPTION]: payload };
    case History.CITY:
      return { ...state, [History.CITY]: payload };
    default:
      return state;
  }
};

export const initialState: IHistory = {
  [History.JOB_TITLE]: 'Something',
  [History.EMPLOYER]: 'Somewhere',
  [History.START_END_DATE]: '',
  [History.DESCRIPTION]: '',
  [History.CITY]: '',
};
