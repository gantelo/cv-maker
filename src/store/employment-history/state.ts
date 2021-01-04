import { IEmploymentHistory } from 'src/models/history';

export const employmentHistoryFallbackState = (): IEmploymentHistory => ({
  items: [],
  sectionTitle: 'Employment History',
});
