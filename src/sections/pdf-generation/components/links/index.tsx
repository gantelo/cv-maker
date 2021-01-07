import { ILinks, MinimalHistory } from 'src/models/minimalHistory';

import { Text, Link } from '@react-pdf/renderer';
import { styles } from './styles';

const Links = (props: ILinks) => (
  <>
    <Text style={styles.sectionTitle}>{props.sectionTitle.toLocaleUpperCase()}</Text>
    {props.items.map((item) => {
      return (
        <Link style={styles.linksItem} src={item[MinimalHistory.VALUE]}>
          {item[MinimalHistory.NAME]}
        </Link>
      );
    })}
  </>
);

export default Links;
