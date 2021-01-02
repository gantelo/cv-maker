import { ACTION_TYPE } from './actions';
import { IAction } from '../types';
import { IHeader } from 'src/models/general';

export const reducer = (state: IHeader, { type, payload }: IAction): IHeader => {
  switch (type) {
    case ACTION_TYPE.SET_NAME:
      return { ...state, name: payload };
    case ACTION_TYPE.SET_PERCENTAGE:
      return { ...state, percentage: payload };
    default:
      return state;
  }
};
