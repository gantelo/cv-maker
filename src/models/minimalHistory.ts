export enum MinimalHistory {
  NAME = 'Name',
  VALUE = 'Value',
}

export interface IMinimalHistory {
  [MinimalHistory.NAME]: string;
  [MinimalHistory.VALUE]: string;
}

export interface ILinks {
  sectionTitle: string;
  items: IMinimalHistory[];
}

export interface ISkills {
  sectionTitle: string;
  items: IMinimalHistory[];
}
