export enum History {
  JOB_TITLE = 'Title',
  EMPLOYER = 'Location',
  START_END_DATE = 'Start - End dates',
  CITY = 'City',
  DESCRIPTION = 'Description',
}

export interface IHistory {
  [History.JOB_TITLE]: string;
  [History.EMPLOYER]: string;
  [History.START_END_DATE]: string;
  [History.DESCRIPTION]: string;
  [History.CITY]: string;
}

export interface IEmploymentHistory {
  sectionTitle: string;
  items: IHistory[];
}

export interface IEducationHistory {
  sectionTitle: string;
  items: IHistory[];
}
