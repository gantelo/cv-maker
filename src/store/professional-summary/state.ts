import { IProfessionalSummary } from 'src/models/general';

export const professionalSummaryFallbackState = (): IProfessionalSummary => ({
  summary: '',
  sectionTitle: 'Professional Summary',
});
