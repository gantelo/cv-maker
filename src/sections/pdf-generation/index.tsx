import { Page, Text, Document } from '@react-pdf/renderer';
import { useEffect } from 'react';
import { IPersonalDetails } from 'src/models/personalDetails';
import { useHeader } from 'src/store/header/useHeader';
import { usePersonalDetails } from 'src/store/personal-details/usePersonalDetails';
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
