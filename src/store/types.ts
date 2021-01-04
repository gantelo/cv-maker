import { IEducationHistory, IEmploymentHistory } from 'src/models/history';
import { IHeader } from 'src/models/general';
import { IPersonalDetails } from 'src/models/personalDetails';
import { IProfessionalSummary } from 'src/models/professionalSummary';

export interface IAction<T = string, P = any> {
  type: T;
  payload: P;
}

export type IGlobalState = {
  header: IHeader;
  personalDetails: IPersonalDetails;
  professionalSummary: IProfessionalSummary;
  employmentHistory: IEmploymentHistory;
  educationHistory: IEducationHistory;
};

export type IReducer<S = any, A = any> = (state: S, action: IAction<A>) => S;
