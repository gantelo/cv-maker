import { InputCleanInline, InputDescription, InputFull } from 'src/components';

const ProfessionalSummary = () => (
  <div>
    <InputCleanInline
      fontSize="text-l"
      fontWeight="text-bold"
      defaultValue="Professional Summary"
      label="Include 2-3 clear sentences about your overall experience."
      value=""
      setValue={() => {}}
    />
    <div>
      <InputDescription />
    </div>
  </div>
);

export default ProfessionalSummary;
