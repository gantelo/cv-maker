import { IPersonalDetails, PersonalDetails } from 'src/models/personalDetails';
import { Text, Image, View } from '@react-pdf/renderer';
import Circle from '../../assets/Circle.png';
import { styles } from './styles';

const Details = (props: IPersonalDetails) => {
  const defaultTitle =
    props[PersonalDetails.SECTION_TITLE] === PersonalDetails.SECTION_TITLE
      ? 'Details'
      : props[PersonalDetails.SECTION_TITLE];
  return (
    <>
      <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={Circle} style={{ height: 3, width: 3, top: 7, right: 6 }} />
        <Text style={styles.sectionTitle}>{defaultTitle.toLocaleUpperCase()}</Text>
        <Image src={Circle} style={{ height: 3, width: 3, top: 7, left: 6 }} />
      </View>
      <Text style={styles.detailsItem}>{props[PersonalDetails.CITY].toLocaleUpperCase()}</Text>
      <Text style={styles.detailsItem}>{props[PersonalDetails.COUNTRY].toLocaleUpperCase()}</Text>
      <Text style={styles.detailsItem}>{props[PersonalDetails.PHONE]}</Text>
      <Text style={[styles.detailsItem, { textDecoration: 'underline' }]}>{props[PersonalDetails.EMAIL]}</Text>
    </>
  );
};

export default Details;
