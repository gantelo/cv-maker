import { IPersonalDetails, PersonalDetails } from 'src/models/personalDetails';

export const personalDetailsFallbackState = (): IPersonalDetails => ({
  [PersonalDetails.JOB_TITLE]: 'Farmer',
  [PersonalDetails.FIRST_NAME]: 'John',
  [PersonalDetails.LAST_NAME]: 'Doe',
  [PersonalDetails.EMAIL]: 'mail@example.com',
  [PersonalDetails.PHONE]: '+1 (231) 555-5555',
  [PersonalDetails.COUNTRY]: 'Neverland',
  [PersonalDetails.CITY]: 'Atlantis',
  [PersonalDetails.SECTION_TITLE]: 'Personal Details',
  [PersonalDetails.PROFILE_PICTURE]: '',
});
