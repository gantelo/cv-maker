export enum ACTION_TYPE {
  SET_NAME = '[header] name updated',
  SET_PERCENTAGE = '[header] percentage updated',
}

export const actions = {
  setName: (name: string) => ({ type: ACTION_TYPE.SET_NAME, payload: name }),
  setPercentage: (percentage: number) => ({ type: ACTION_TYPE.SET_PERCENTAGE, payload: percentage }),
};
