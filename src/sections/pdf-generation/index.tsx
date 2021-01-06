import { Page, Text, Document, Font } from '@react-pdf/renderer';
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
        <Text style={styles.header} />
        <Text style={styles.title}>{header.name}</Text>
        <Text
          style={
            styles.author
          }>{`${personalDetails['Job Title']} - ${personalDetails.City}, ${personalDetails.Country}`}</Text>
      </Page>
    </Document>
  );
};
