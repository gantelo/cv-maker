import { ACTION_TYPE } from './actions';
import { IAction } from '../types';
import { IPersonalDetails, PersonalDetails } from 'src/models/personalDetails';

export const reducer = (state: IPersonalDetails, { type, payload }: IAction): IPersonalDetails => {
  switch (type) {
    case ACTION_TYPE.SET_CITY:
      return { ...state, [PersonalDetails.CITY]: payload };
    case ACTION_TYPE.SET_COUNTRY:
      return { ...state, [PersonalDetails.COUNTRY]: payload };
    case ACTION_TYPE.SET_EMAIL:
      return { ...state, [PersonalDetails.EMAIL]: payload };
    case ACTION_TYPE.SET_FIRST_NAME:
      return { ...state, [PersonalDetails.FIRST_NAME]: payload };
    case ACTION_TYPE.SET_JOB_TITLE:
      return { ...state, [PersonalDetails.JOB_TITLE]: payload };
    case ACTION_TYPE.SET_LAST_NAME:
      return { ...state, [PersonalDetails.LAST_NAME]: payload };
    case ACTION_TYPE.SET_PHONE:
      return { ...state, [PersonalDetails.PHONE]: payload };
    case ACTION_TYPE.SET_SECTION_TITLE:
      return { ...state, [PersonalDetails.SECTION_TITLE]: payload };
    default:
      return state;
  }
};
