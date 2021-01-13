import { PersonalDetails } from 'src/models/personalDetails';

export enum ACTION_TYPE {
  SET_SECTION_TITLE = '[personal-details] Section Title updated',
  SET_JOB_TITLE = '[personal-details] Job Title updated',
  SET_FIRST_NAME = '[personal-details] First Name updated',
  SET_LAST_NAME = '[personal-details] Last Name updated',
  SET_EMAIL = '[personal-details] Email updated',
  SET_PHONE = '[personal-details] Phone updated',
  SET_COUNTRY = '[personal-details] Country updated',
  SET_CITY = '[personal-details] City updated',
  SET_PROFILE_PICTURE = '[personal-details] Profile picture updated',
}

export const actions = {
  [PersonalDetails.SECTION_TITLE]: (value: string) => ({ type: ACTION_TYPE.SET_SECTION_TITLE, payload: value }),
  [PersonalDetails.JOB_TITLE]: (value: string) => ({ type: ACTION_TYPE.SET_JOB_TITLE, payload: value }),
  [PersonalDetails.FIRST_NAME]: (value: string) => ({ type: ACTION_TYPE.SET_FIRST_NAME, payload: value }),
  [PersonalDetails.LAST_NAME]: (value: string) => ({ type: ACTION_TYPE.SET_LAST_NAME, payload: value }),
  [PersonalDetails.EMAIL]: (value: string) => ({ type: ACTION_TYPE.SET_EMAIL, payload: value }),
  [PersonalDetails.PHONE]: (value: string) => ({ type: ACTION_TYPE.SET_PHONE, payload: value }),
  [PersonalDetails.COUNTRY]: (value: string) => ({ type: ACTION_TYPE.SET_COUNTRY, payload: value }),
  [PersonalDetails.CITY]: (value: string) => ({ type: ACTION_TYPE.SET_CITY, payload: value }),
  [PersonalDetails.PROFILE_PICTURE]: (value: string) => ({ type: ACTION_TYPE.SET_PROFILE_PICTURE, payload: value }),
};
