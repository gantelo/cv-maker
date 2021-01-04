import { ACTION_TYPE } from './actions';
import { IAction } from 'src/store/types';
import { IMinimalHistory, ISkills, MinimalHistory } from 'src/models/minimalHistory';

const initialState: IMinimalHistory = {
  [MinimalHistory.NAME]: '',
  [MinimalHistory.VALUE]: '',
};

export const reducer = (state: ISkills, { type, payload }: IAction): ISkills => {
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
    case ACTION_TYPE.ADD_ITEM:
      return { ...state, items: state.items.concat(initialState) };
    case ACTION_TYPE.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.slice(0, state.items.length - 1),
      };
    default:
      return state;
  }
};
