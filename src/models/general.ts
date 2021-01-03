export interface IHeader {
  name: string;
  percentage: number;
  nationality?: string;
}

export interface ISections {
  header: IHeader;
}

export interface Deps {
  // apiService: ReturnType<typeof ApiService>;
  apiService: any;
}

export enum PersonalDetails {
  SECTION_TITLE = 'Personal Details',
  JOB_TITLE = 'Job Title',
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
  EMAIL = 'Email',
  PHONE = 'Phone',
  COUNTRY = 'Country',
  CITY = 'City',
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
}

export interface IProfessionalSummary {
  sectionTitle: string;
  summary: string;
}
