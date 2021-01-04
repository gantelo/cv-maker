import { InputCleanInline, InputFull } from 'src/components';

import { PersonalDetails } from 'src/models/personalDetails';
import styles from './styles.module.css';
import { usePersonalDetails } from 'src/store/personal-details/usePersonalDetails';

const PersonalDetailsComponent = () => {
  const { setValue, personalDetails } = usePersonalDetails();

  const abstractInputValue = (field: PersonalDetails) => {
    return { setValue: (value: string) => setValue(field, value), value: personalDetails[field], label: field };
  };

  return (
    <div className={styles.personalDetailsContainer}>
      <InputCleanInline
        fontSize="text-l"
        fontWeight="text-bold"
        defaultValue="Personal Details"
        {...abstractInputValue(PersonalDetails.SECTION_TITLE)}
        label=""
      />
      <div className={styles.inputContainer}>
        <InputFull {...abstractInputValue(PersonalDetails.JOB_TITLE)} />
        {/* ProfilePic someday */}
      </div>
      <div className={styles.inputContainer}>
        <InputFull {...abstractInputValue(PersonalDetails.FIRST_NAME)} />
        <InputFull {...abstractInputValue(PersonalDetails.LAST_NAME)} />
      </div>
      <div className={styles.inputContainer}>
        <InputFull {...abstractInputValue(PersonalDetails.EMAIL)} />
        <InputFull {...abstractInputValue(PersonalDetails.PHONE)} />
      </div>
      <div className={styles.inputContainer}>
        <InputFull {...abstractInputValue(PersonalDetails.COUNTRY)} />
        <InputFull {...abstractInputValue(PersonalDetails.CITY)} />
      </div>
    </div>
  );
};

export default PersonalDetailsComponent;
