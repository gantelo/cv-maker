import { IEducationHistory } from 'src/models/history';

export const educationHistoryFallbackState = (): IEducationHistory => ({
  items: [],
  sectionTitle: 'Education',
});
