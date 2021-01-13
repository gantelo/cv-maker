import { Text, View, Image } from '@react-pdf/renderer';
import Location from '../../assets/Location.png';
import { IHeader } from 'src/models/general';
import { IPersonalDetails, PersonalDetails } from 'src/models/personalDetails';
import { styles } from './styles';

interface IHeaderProps {
  headerProps: IHeader;
  personalProps: IPersonalDetails;
}

const Header = ({ headerProps, personalProps }: IHeaderProps) => (
  <>
    {Boolean(personalProps['Profile Picture']) && (
      <Image style={styles.profilePic} src={personalProps['Profile Picture']} />
    )}
    <Text style={styles.header}>{headerProps.name.toLocaleUpperCase()}</Text>
    <View style={styles.subHeaderContainer}>
      <Text style={styles.title}>{personalProps[PersonalDetails.JOB_TITLE].toLocaleUpperCase()}</Text>
      <Image src={Location} style={{ height: 6, width: 5, top: 7, marginHorizontal: 4 }} />
      <Text style={styles.title}>{` ${personalProps[PersonalDetails.CITY].toLocaleUpperCase()}, ${personalProps[
        PersonalDetails.COUNTRY
      ].toLocaleUpperCase()}`}</Text>
    </View>
  </>
);

export default Header;
