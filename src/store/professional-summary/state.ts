import { IProfessionalSummary } from 'src/models/professionalSummary';

export const professionalSummaryFallbackState = (): IProfessionalSummary => ({
  summary: '',
  sectionTitle: 'Professional Summary',
});
