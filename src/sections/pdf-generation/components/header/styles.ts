import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  title: {
    fontSize: 8,
    marginTop: 14,
    fontFamily: 'Roboto',
  },
  subHeaderContainer: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 17,
    marginTop: 15,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'medium',
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 3,
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
