import { Font, StyleSheet } from '@react-pdf/renderer';
import RobotoRegular from '../../assets/Roboto/Roboto-Regular.ttf';
import RobotoItalic from '../../assets/Roboto/Roboto-Italic.ttf';
import RobotoBlack from '../../assets/Roboto/Roboto-Black.ttf';
import RobotoBold from '../../assets/Roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '../../assets/Roboto/Roboto-BoldItalic.ttf';
import RobotoLight from '../../assets/Roboto/Roboto-Light.ttf';
import RobotoLightItalic from '../../assets/Roboto/Roboto-LightItalic.ttf';
import RobotoBlackItalic from '../../assets/Roboto/Roboto-BlackItalic.ttf';
import RobotoMedium from '../../assets/Roboto/Roboto-Medium.ttf';
import RobotoMediumItalic from '../../assets/Roboto/Roboto-MediumItalic.ttf';
import RobotoThin from '../../assets/Roboto/Roboto-Thin.ttf';
import RobotoThinItalic from '../../assets/Roboto/Roboto-ThinItalic.ttf';

Font.register({
  family: 'Roboto',
  format: 'trueType',
  fonts: [
    { src: RobotoRegular }, // font-style: normal, font-weight: normal
    { src: RobotoItalic, fontStyle: 'italic' },
    { src: RobotoBlack, fontWeight: 'semibold' },
    { src: RobotoBold, fontWeight: 'bold' },
    { src: RobotoBoldItalic, fontStyle: 'italic', fontWeight: 'bold' },
    { src: RobotoLight, fontWeight: 'light' },
    { src: RobotoLightItalic, fontStyle: 'italic', fontWeight: 'light' },
    { src: RobotoBlackItalic, fontStyle: 'italic', fontWeight: 'semibold' },
    { src: RobotoMedium, fontWeight: 'medium' },
    { src: RobotoMediumItalic, fontStyle: 'italic', fontWeight: 'medium' },
    { src: RobotoThin, fontWeight: 'thin' },
    { src: RobotoThinItalic, fontStyle: 'italic', fontWeight: 'thin' },
  ],
});

export const styles = StyleSheet.create({
  title: {
    fontSize: 8,
    marginTop: 14,
    fontFamily: 'Roboto',
  },
  sectionTitle: {
    fontSize: 10,
    marginTop: 22,
    marginBottom: 8,
    fontFamily: 'Roboto',
    fontWeight: 'medium',
  },
  profileSummary: {
    fontSize: 9,
    marginTop: 2,
    fontFamily: 'Roboto',
  },
  sections: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 40,
    paddingRight: 40,
  },
  sectionRight: {
    marginLeft: 30,
    width: '72%',
    display: 'flex',
  },
  sectionLeft: {
    maxWidth: '26%',
    fontFamily: 'Roboto',
    alignItems: 'center',
  },
});
