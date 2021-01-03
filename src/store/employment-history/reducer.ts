import { ACTION_TYPE } from './actions';
import { IAction } from 'src/store/types';
import { IEmploymentHistory } from 'src/models/general';

export const reducer = (state: IEmploymentHistory, { type, payload }: IAction): IEmploymentHistory => {
  switch (type) {
    case ACTION_TYPE.SET_SECTION_TITLE:
      return { ...state, sectionTitle: payload.value };
    case ACTION_TYPE.SET_ITEM:
      return {
        ...state,
        items: state.items.map((item, idx) => {
          if (idx === payload.index) return payload.value;
          return item;
        }),
      };
    default:
      return state;
  }
};
