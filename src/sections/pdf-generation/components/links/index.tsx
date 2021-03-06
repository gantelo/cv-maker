import { ILinks, MinimalHistory } from 'src/models/minimalHistory';

import { Text, Link, Image, View } from '@react-pdf/renderer';
import Circle from '../../assets/Circle.png';
import { styles } from './styles';

const Links = (props: ILinks) => (
  <>
    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Image src={Circle} style={{ height: 3, width: 3, top: 7, right: 6 }} />
      <Text style={styles.sectionTitle}>{props.sectionTitle.toLocaleUpperCase()}</Text>
      <Image src={Circle} style={{ height: 3, width: 3, top: 7, left: 6 }} />
    </View>
    {props.items.map((item, idx) => {
      return (
        <Link style={styles.linksItem} src={item[MinimalHistory.VALUE]} key={`link-key-item-${idx}`}>
          {item[MinimalHistory.NAME]}
        </Link>
      );
    })}
  </>
);

export default Links;
