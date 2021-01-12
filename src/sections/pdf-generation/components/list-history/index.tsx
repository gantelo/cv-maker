import { Text } from '@react-pdf/renderer';
import { IEmploymentHistory } from 'src/models/history';
import { professionalSummaryFallbackState } from 'src/store/professional-summary/state';
import HistoryItem from './history-item';
import { styles } from './styles';

const History = (props: IEmploymentHistory) => {
  const defaultTitle =
    props.sectionTitle === professionalSummaryFallbackState().sectionTitle ? 'Profile' : props.sectionTitle;

  return (
    <>
      <Text style={styles.sectionTitle}>{defaultTitle.toLocaleUpperCase()}</Text>
      {props.items.map((item, idx) => (
        <HistoryItem {...item} key={`${defaultTitle}-history-item-${idx}`} />
      ))}
    </>
  );
};
export default History;
