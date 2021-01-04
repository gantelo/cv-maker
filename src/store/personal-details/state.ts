import { IPersonalDetails, PersonalDetails } from 'src/models/personalDetails';

export const personalDetailsFallbackState = (): IPersonalDetails => ({
  [PersonalDetails.JOB_TITLE]: '',
  [PersonalDetails.FIRST_NAME]: '',
  [PersonalDetails.LAST_NAME]: '',
  [PersonalDetails.EMAIL]: '',
  [PersonalDetails.PHONE]: '',
  [PersonalDetails.COUNTRY]: '',
  [PersonalDetails.CITY]: '',
  [PersonalDetails.SECTION_TITLE]: 'Personal Details',
});
