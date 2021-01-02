import { IHeader, IPersonalDetails } from 'src/models/general';

export interface IAction<T = string, P = any> {
  type: T;
  payload: P;
}

export type IGlobalState = {
  header: IHeader;
  personalDetails: IPersonalDetails;
};

export type IReducer<S = any, A = any> = (state: S, action: IAction<A>) => S;
