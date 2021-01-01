import styles from './styles.module.css';

import { InputCleanInline, InputFull } from 'src/components';

const PersonalDetails = () => (
  <div className={styles.personalDetailsContainer}>
    <InputCleanInline fontSize="text-l" fontWeight="text-bold" defaultValue="Personal Details" />
    <div className={styles.inputContainer}>
      <InputFull label="Job Title" />
      {/* <InputFull label="Sarlanga" /> */}
    </div>
    <div className={styles.inputContainer}>
      <InputFull label="First Name" />
      <InputFull label="Last Name" />
    </div>
    <div className={styles.inputContainer}>
      <InputFull label="Email" />
      <InputFull label="Phone" />
    </div>
    <div className={styles.inputContainer}>
      <InputFull label="Country" />
      <InputFull label="City" />
    </div>
  </div>
);

export default PersonalDetails;
