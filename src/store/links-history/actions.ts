import { IMinimalHistory } from 'src/models/minimalHistory';

export enum ACTION_TYPE {
  SET_SECTION_TITLE = '[links] section title updated',
  SET_ITEM = '[links]  Job Title updated',
  ADD_ITEM = '[links] history added',
  REMOVE_ITEM = '[links] history deleted',
}

export const actions = {
  setSectionTitle: (value: string) => ({ type: ACTION_TYPE.SET_SECTION_TITLE, payload: { value } }),
  setItem: (value: IMinimalHistory, index: number) => ({ type: ACTION_TYPE.SET_ITEM, payload: { value, index } }),
  addItem: () => ({ type: ACTION_TYPE.ADD_ITEM, payload: {} }),
  removeItem: () => ({ type: ACTION_TYPE.REMOVE_ITEM, payload: {} }),
};
