import { Page, Text, Document, View, Link } from '@react-pdf/renderer';
import { IPersonalDetails } from 'src/models/personalDetails';
import { useHeader } from 'src/store/header/useHeader';
import { styles } from './styles';

interface IDocProps {
  personalDetails: IPersonalDetails;
}

export const MyDocument = ({ personalDetails }: IDocProps) => {
  const { header } = useHeader();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>GABRIEL ANTELO</Text>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.title}>SOFTWARE ENGINEER - BUENOS AIRES, ARGENTINA</Text>
        </View>
        <View style={styles.sections}>
          <View style={styles.sectionLeft}>
            <Text style={styles.sectionTitle}>DETAILS</Text>
            <Text style={styles.detailsItem}>Buenos Aires</Text>
            <Text style={styles.detailsItem}>Argentina</Text>
            <Text style={styles.detailsItem}>+54 (341) 2293380</Text>
            <Text style={[styles.detailsItem, { textDecoration: 'underline' }]}>gabriel1536@gmail.com</Text>
            <Text style={styles.sectionTitle}>LINKS</Text>
            <Link style={styles.linksItem} src="google.com">
              Chorizo
            </Link>
            <Link style={styles.linksItem} src="google.com">
              Chorizo
            </Link>
            <Link style={styles.linksItem} src="google.com">
              Chorizo
            </Link>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.sectionTitle}>PROFILE</Text>
            <Text style={styles.profileSummary}>
              Computer science background with a solid grasp on functional programming paradigm and OOP. I consider
              myself a fast learner and eager to grow as a professional.
            </Text>

            <Text style={styles.sectionTitle}>EMPLOYMENT HISTORY</Text>
            <Text style={styles.profileSummary}>
              Computer science background with a solid grasp on functional programming paradigm and OOP. I consider
              myself a fast learner and eager to grow as a professional.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
