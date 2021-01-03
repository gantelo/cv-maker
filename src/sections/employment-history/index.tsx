import { HistoryList, InputCleanInline } from 'src/components';

import { useEmploymentHistory } from 'src/store/employment-history/useEmploymentHistory';

const EmploymentHistory = () => {
  const { setItem, setSectionTitle, employmentHistory, addItem, removeItem } = useEmploymentHistory();

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
      <HistoryList setItem={setItem} items={employmentHistory.items} removeItem={removeItem} addItem={addItem} />
    </div>
  );
};

export default EmploymentHistory;
