import styles from './styles.module.css';

import { InputCleanInline, InputFull } from 'src/components';

const PersonalDetails = () => (
  <div className={styles.personalDetailsContainer}>
    <InputCleanInline
      fontSize="text-l"
      fontWeight="text-bold"
      defaultValue="Personal Details"
      value=""
      setValue={() => {}}
    />
    <div className={styles.inputContainer}>
      <InputFull label="Job Title" value="" setValue={() => {}} />
      {/* <InputFull label="Sarlanga" /> */}
    </div>
    <div className={styles.inputContainer}>
      <InputFull label="First Name" value="" setValue={() => {}} />
      <InputFull label="Last Name" value="" setValue={() => {}} />
    </div>
    <div className={styles.inputContainer}>
      <InputFull label="Email" value="" setValue={() => {}} />
      <InputFull label="Phone" value="" setValue={() => {}} />
    </div>
    <div className={styles.inputContainer}>
      <InputFull label="Country" value="" setValue={() => {}} />
      <InputFull label="City" value="" setValue={() => {}} />
    </div>
  </div>
);

export default PersonalDetails;
