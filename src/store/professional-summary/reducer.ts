import { ACTION_TYPE } from './actions';
import { IAction } from 'src/store/types';
import { IProfessionalSummary } from 'src/models/professionalSummary';

export const reducer = (state: IProfessionalSummary, { type, payload }: IAction): IProfessionalSummary => {
  switch (type) {
    case ACTION_TYPE.SET_SUMMARY:
      return { ...state, summary: payload };
    case ACTION_TYPE.SET_SECTION_TITLE:
      return { ...state, sectionTitle: payload };
    default:
      return state;
  }
};
