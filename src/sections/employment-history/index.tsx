import { HistoryComponent, InputCleanInline } from 'src/components';
import { IHistory } from 'src/models/general';
import { useEmploymentHistory } from 'src/store/employment-history/useEmploymentHistory';

const EmploymentHistory = () => {
  const { setItem, setSectionTitle, employmentHistory } = useEmploymentHistory();

  return (
    <div>
      <InputCleanInline
        fontSize="text-l"
        fontWeight="text-bold"
        defaultValue="Employment History"
        label="Include relevant experience and dates in this section. List your most recent position first."
        value={employmentHistory.sectionTitle}
        setValue={setSectionTitle}
      />
      <div>
        <HistoryComponent
          setItem={(item: IHistory) => {
            setItem(item, 0);
          }}
        />
      </div>
    </div>
  );
};

export default EmploymentHistory;
