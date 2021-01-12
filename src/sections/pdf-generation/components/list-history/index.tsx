import { Text, View, Image } from '@react-pdf/renderer';
import { IEmploymentHistory } from 'src/models/history';
import Education from '../../assets/Education.png';
import Employment from '../../assets/Employment.png';
import HistoryItem from './history-item';
import { styles } from './styles';

interface HistoryProps {
  history: IEmploymentHistory;
  icon: 'education' | 'employment';
}

const History = ({ history, icon }: HistoryProps) => {
  return (
    <>
      <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
        <Image
          src={icon === 'education' ? Education : Employment}
          style={{ height: 9, width: 10, top: 7, right: 14 }}
        />
        <Text style={styles.sectionTitle}>{history.sectionTitle.toLocaleUpperCase()}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'black', height: '100%', width: 1, right: 10 }} />
        <View style={{ marginLeft: 10 }}>
          {history.items.map((item, idx) => (
            <HistoryItem {...item} key={`${history.sectionTitle}-history-item-${idx}`} />
          ))}
        </View>
      </View>
    </>
  );
};
export default History;
