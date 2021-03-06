import { Page, Text, Document, View, Link } from '@react-pdf/renderer';
import { IHeader } from 'src/models/general';
import { IEducationHistory, IEmploymentHistory } from 'src/models/history';
import { IInterests, ILinks, ISkills } from 'src/models/minimalHistory';
import { IPersonalDetails } from 'src/models/personalDetails';
import { IProfessionalSummary } from 'src/models/professionalSummary';
import { Header, Details, Links, Profile, History, Skills } from './components';
import { styles } from './styles';

interface IDocProps {
  personalDetails: IPersonalDetails;
  header: IHeader;
  links: ILinks;
  pSummary: IProfessionalSummary;
  employment: IEmploymentHistory;
  education: IEducationHistory;
  skills: ISkills;
  interests: IInterests;
}

export const MyDocument = ({
  personalDetails,
  header,
  links,
  pSummary,
  employment,
  education,
  skills,
  interests,
}: IDocProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header headerProps={header} personalProps={personalDetails} />
      <View style={styles.sections}>
        <View style={styles.sectionLeft}>
          <Details {...personalDetails} />
          <Links {...links} />
          <Skills {...skills} />
          <Links {...interests} />
        </View>
        <View style={styles.sectionRight}>
          <Profile {...pSummary} />
          <History history={employment} icon="employment" />
          <History history={education} icon="education" />
        </View>
      </View>
    </Page>
  </Document>
);
