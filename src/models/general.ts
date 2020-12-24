export interface IHeader {
  title: string;
  name: string;
  nationality: string;
}

export interface ISections {
  header: IHeader;
}

export interface Deps {
  // apiService: ReturnType<typeof ApiService>;
  apiService: any;
}
