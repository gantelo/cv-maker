import { InputCleanInline } from 'src/components';

const EmploymentHistory = () => (
  <div>
    <InputCleanInline
      fontSize="text-l"
      fontWeight="text-bold"
      defaultValue="Employment History"
      label="Include your last 10 years of relevant experience and dates in this section. List your most recent position first."
    />
    <div>{/* <InputDescription /> */}</div>
  </div>
);

export default EmploymentHistory;
