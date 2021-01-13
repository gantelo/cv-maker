export enum PersonalDetails {
  SECTION_TITLE = 'Personal Details',
  JOB_TITLE = 'Job Title',
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
  EMAIL = 'Email',
  PHONE = 'Phone',
  COUNTRY = 'Country',
  CITY = 'City',
  PROFILE_PICTURE = 'Profile Picture',
}

export interface IPersonalDetails {
  [PersonalDetails.SECTION_TITLE]: string;
  [PersonalDetails.JOB_TITLE]: string;
  [PersonalDetails.FIRST_NAME]: string;
  [PersonalDetails.LAST_NAME]: string;
  [PersonalDetails.EMAIL]: string;
  [PersonalDetails.PHONE]: string;
  [PersonalDetails.COUNTRY]: string;
  [PersonalDetails.CITY]: string;
  [PersonalDetails.PROFILE_PICTURE]: string;
}
