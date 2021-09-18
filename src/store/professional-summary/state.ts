import { IProfessionalSummary } from 'src/models/professionalSummary';

export const professionalSummaryFallbackState = (): IProfessionalSummary => ({
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  sectionTitle: 'Professional Summary',
});
