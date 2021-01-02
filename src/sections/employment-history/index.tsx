import { History, InputCleanInline } from 'src/components';

const EmploymentHistory = () => (
  <div>
    <InputCleanInline
      fontSize="text-l"
      fontWeight="text-bold"
      defaultValue="Employment History"
      label="Include relevant experience and dates in this section. List your most recent position first."
    />
    <div>
      <History />
    </div>
  </div>
);

export default EmploymentHistory;
