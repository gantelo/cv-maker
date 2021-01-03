import { InputCleanInline, InputDescription } from 'src/components';

import { useProfessionalSummary } from 'src/store/professional-summary/useProfessionalSummary';

const ProfessionalSummaryComponent = () => {
  const { setSectionTitle, setSummary, professionalSummary } = useProfessionalSummary();

  return (
    <div>
      <InputCleanInline
        fontSize="text-l"
        fontWeight="text-bold"
        defaultValue="Professional Summary"
        label="Include 2-3 clear sentences about your overall experience."
        value={professionalSummary.sectionTitle}
        setValue={setSectionTitle}
      />
      <div>
        <InputDescription value={professionalSummary.summary} setValue={setSummary} />
      </div>
    </div>
  );
};

export default ProfessionalSummaryComponent;
