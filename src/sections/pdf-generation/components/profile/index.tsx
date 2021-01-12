import { Text, View, Image } from '@react-pdf/renderer';
import ProfilePic from '../../assets/Profile.png';
import { IProfessionalSummary } from 'src/models/professionalSummary';
import { professionalSummaryFallbackState } from 'src/store/professional-summary/state';
import { styles } from './styles';

const Profile = (props: IProfessionalSummary) => {
  const defaultTitle =
    props.sectionTitle === professionalSummaryFallbackState().sectionTitle ? 'Profile' : props.sectionTitle;

  return (
    <>
      <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
        <Image src={ProfilePic} style={{ height: 9, width: 10, top: 7, right: 14 }} />
        <Text style={styles.sectionTitle}>{defaultTitle.toLocaleUpperCase()}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'black', height: '120%', width: 1, right: 10 }} />
        <Text style={styles.profileSummary}>{props.summary}</Text>
      </View>
    </>
  );
};
export default Profile;
