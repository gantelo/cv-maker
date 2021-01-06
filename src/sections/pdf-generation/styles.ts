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
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});
