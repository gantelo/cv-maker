import { Page, Text, Document, View, Link } from '@react-pdf/renderer';
import { IHeader } from 'src/models/general';
import { ILinks } from 'src/models/minimalHistory';
import { IPersonalDetails } from 'src/models/personalDetails';
import { IProfessionalSummary } from 'src/models/professionalSummary';
import { Header, Details, Links, Profile } from './components';
import { styles } from './styles';

interface IDocProps {
  personalDetails: IPersonalDetails;
  header: IHeader;
  links: ILinks;
  pSummary: IProfessionalSummary;
}

export const MyDocument = ({ personalDetails, header, links, pSummary }: IDocProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header headerProps={header} personalProps={personalDetails} />
      <View style={styles.sections}>
        <View style={styles.sectionLeft}>
          <Details {...personalDetails} />
          <Links {...links} />
        </View>
        <View style={styles.sectionRight}>
          <Profile {...pSummary} />
        </View>
      </View>
    </Page>
  </Document>
);
