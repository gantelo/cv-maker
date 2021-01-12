import { Text, View } from '@react-pdf/renderer';
import { IHistory, History } from 'src/models/history';
import ParseDescription from '../../parse-description';
import { styles } from './styles';

const HistoryItem = (props: IHistory) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.title}>{`${props[History.JOB_TITLE] || 'Something'} at ${
        props[History.EMPLOYER] || 'Somewhere'
      }, ${props[History.CITY]}`}</Text>
      <Text style={styles.date}>{props['Start - End dates']}</Text>
      <ParseDescription description={props.Description} />
    </View>
  );
};
export default HistoryItem;
