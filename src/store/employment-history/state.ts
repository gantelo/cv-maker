import { IEmploymentHistory } from 'src/models/general';

export const employmentHistoryFallbackState = (): IEmploymentHistory => ({
  items: [],
  sectionTitle: 'Employment History',
});
