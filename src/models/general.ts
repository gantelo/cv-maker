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
