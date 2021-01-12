import { ILinks, MinimalHistory } from 'src/models/minimalHistory';

import { Text, Image, View } from '@react-pdf/renderer';
import Circle from '../../assets/Circle.png';
import { styles } from './styles';

const Skills = (props: ILinks) => (
  <>
    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Image src={Circle} style={{ height: 3, width: 3, top: 7, right: 6 }} />
      <Text style={styles.sectionTitle}>{props.sectionTitle.toLocaleUpperCase()}</Text>
      <Image src={Circle} style={{ height: 3, width: 3, top: 7, left: 6 }} />
    </View>
    {props.items.map((item, idx) => {
      return (
        <View key={`skill-item-${idx}`}>
          <Text style={styles.linksItem}>{item[MinimalHistory.NAME]}</Text>
          {Boolean(parseInt(item[MinimalHistory.VALUE])) && (
            <View style={styles.barContainer}>
              <View style={[styles.blackBar, { width: `${item[MinimalHistory.VALUE]}%` }]} />
            </View>
          )}
        </View>
      );
    })}
  </>
);

export default Skills;
