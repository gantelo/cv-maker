import { Text, View } from '@react-pdf/renderer';
import { IHeader } from 'src/models/general';
import { IPersonalDetails, PersonalDetails } from 'src/models/personalDetails';
import { styles } from './styles';

interface IHeaderProps {
  headerProps: IHeader;
  personalProps: IPersonalDetails;
}

const Header = ({ headerProps, personalProps }: IHeaderProps) => (
  <>
    <Text style={styles.header}>{headerProps.name.toLocaleUpperCase()}</Text>
    <View style={styles.subHeaderContainer}>
      <Text style={styles.title}>{personalProps[PersonalDetails.JOB_TITLE]}</Text>
      <Text style={styles.title}>{` ${personalProps[PersonalDetails.CITY]}, ${
        personalProps[PersonalDetails.COUNTRY]
      }`}</Text>
    </View>
  </>
);

export default Header;
