import { IHistory } from 'src/models/history';

export enum ACTION_TYPE {
  SET_SECTION_TITLE = '[education history] section title updated',
  SET_ITEM = '[education history]  Job Title updated',
  ADD_ITEM = '[education history] history added',
  REMOVE_ITEM = '[education history] history deleted',
}

export const actions = {
  setSectionTitle: (value: string) => ({ type: ACTION_TYPE.SET_SECTION_TITLE, payload: { value } }),
  setItem: (value: IHistory, index: number) => ({ type: ACTION_TYPE.SET_ITEM, payload: { value, index } }),
  addItem: () => ({ type: ACTION_TYPE.ADD_ITEM, payload: {} }),
  removeItem: () => ({ type: ACTION_TYPE.REMOVE_ITEM, payload: {} }),
};
