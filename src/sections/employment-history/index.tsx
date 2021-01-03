import { HistoryComponent, InputCleanInline } from 'src/components';

import { IHistory } from 'src/models/general';
import styles from './styles.module.css';
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
      <div className={styles.container}>
        {employmentHistory.items.map((_item, idx) => (
          <div key={`employment-history-${_item['Start - End dates']}-${idx}`} className={styles.historyContainer}>
            <HistoryComponent
              setItem={(item: IHistory) => {
                setItem(item, idx);
              }}
            />
            {idx === employmentHistory.items.length - 1 && (
              <a onClick={removeItem} className={styles.delete}>
                Delete
              </a>
            )}
          </div>
        ))}
        <button type="button" className={styles.addHistory} onClick={addItem}>
          Add Employment History
        </button>
      </div>
    </div>
  );
};

export default EmploymentHistory;
