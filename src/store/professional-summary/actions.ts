export enum ACTION_TYPE {
  SET_SUMMARY = '[professional summary] summary updated',
  SET_SECTION_TITLE = '[professional summary] section title updated',
}

export const actions = {
  setSectionTitle: (value: string) => ({ type: ACTION_TYPE.SET_SECTION_TITLE, payload: value }),
  setSummary: (sum: string) => ({ type: ACTION_TYPE.SET_SUMMARY, payload: sum }),
};
