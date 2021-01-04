import { IMinimalHistory } from 'src/models/minimalHistory';

export enum ACTION_TYPE {
  SET_SECTION_TITLE = '[interests history] section title updated',
  SET_ITEM = '[interests history]  Job Title updated',
  ADD_ITEM = '[interests history] history added',
  REMOVE_ITEM = '[interests history] history deleted',
}

export const actions = {
  setSectionTitle: (value: string) => ({ type: ACTION_TYPE.SET_SECTION_TITLE, payload: { value } }),
  setItem: (value: IMinimalHistory, index: number) => ({ type: ACTION_TYPE.SET_ITEM, payload: { value, index } }),
  addItem: () => ({ type: ACTION_TYPE.ADD_ITEM, payload: {} }),
  removeItem: () => ({ type: ACTION_TYPE.REMOVE_ITEM, payload: {} }),
};
