import { HistoryComponent } from 'src/components';
import { IHistory } from 'src/models/general';
import styles from './styles.module.css';

interface HistoryListProps {
  setItem: (item: IHistory, index: number) => void;
  items: IHistory[];
  addItem: () => void;
  removeItem: () => void;
}

const HistoryList = ({ setItem, items, addItem, removeItem }: HistoryListProps) => {
  return (
    <div className={styles.container}>
      {items.map((_item, idx) => (
        <div key={`employment-history-${_item['Start - End dates']}-${idx}`} className={styles.historyContainer}>
          <HistoryComponent
            setItem={(item: IHistory) => {
              setItem(item, idx);
            }}
          />
          {idx === items.length - 1 && (
            <a onClick={removeItem} className={styles.delete}>
              Delete
            </a>
          )}
        </div>
      ))}
      <button type="button" className={styles.addHistory} onClick={addItem}>
        Add Item
      </button>
    </div>
  );
};

export default HistoryList;
