import { default as HistoryComponent } from './history';
import { IHistory } from 'src/models/history';
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
        <div key={`employment-history-${idx}`} className={styles.historyContainer}>
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
      <a className={styles.addHistory} onClick={addItem}>
        <span style={{ fontWeight: 700 }}>+ </span>
        Add Item
      </a>
    </div>
  );
};

export default HistoryList;
