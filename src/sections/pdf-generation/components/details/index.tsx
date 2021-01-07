import { IPersonalDetails, PersonalDetails } from 'src/models/personalDetails';
import { Text } from '@react-pdf/renderer';
import { styles } from './styles';

const Details = (props: IPersonalDetails) => {
  const defaultTitle =
    props[PersonalDetails.SECTION_TITLE] === PersonalDetails.SECTION_TITLE
      ? 'Details'
      : props[PersonalDetails.SECTION_TITLE];
  return (
    <>
      <Text style={styles.sectionTitle}>{defaultTitle.toLocaleUpperCase()}</Text>
      <Text style={styles.detailsItem}>{props[PersonalDetails.CITY]}</Text>
      <Text style={styles.detailsItem}>{props[PersonalDetails.COUNTRY]}</Text>
      <Text style={styles.detailsItem}>{props[PersonalDetails.PHONE]}</Text>
      <Text style={[styles.detailsItem, { textDecoration: 'underline' }]}>{props[PersonalDetails.EMAIL]}</Text>
    </>
  );
};

export default Details;
