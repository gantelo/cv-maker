import { Text } from '@react-pdf/renderer';
import { IProfessionalSummary } from 'src/models/professionalSummary';
import { professionalSummaryFallbackState } from 'src/store/professional-summary/state';
import { styles } from './styles';

const Profile = (props: IProfessionalSummary) => {
  const defaultTitle =
    props.sectionTitle === professionalSummaryFallbackState().sectionTitle ? 'Profile' : props.sectionTitle;

  return (
    <>
      <Text style={styles.sectionTitle}>{defaultTitle.toLocaleUpperCase()}</Text>
      <Text style={styles.profileSummary}>{props.summary}</Text>
    </>
  );
};
export default Profile;
