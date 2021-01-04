import { default as MinimalHistoryComponent } from './minimal-history';
import { IMinimalHistory } from 'src/models/minimalHistory';
import styles from './styles.module.css';

interface MinimalHistoryListProps {
  setItem: (item: IMinimalHistory, index: number) => void;
  items: IMinimalHistory[];
  addItem: () => void;
  removeItem: () => void;
}

const MinimalHistoryList = ({ setItem, items, addItem, removeItem }: MinimalHistoryListProps) => {
  return (
    <div className={styles.container}>
      {items.map((_item, idx) => (
        <div key={`minimal-history-${idx}-${Math.random()}`} className={styles.historyContainer}>
          <MinimalHistoryComponent
            setItem={(item: IMinimalHistory) => {
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

export default MinimalHistoryList;
