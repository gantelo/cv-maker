import { InputCleanInline, InputFull } from 'src/components';

import ImageUploading from 'react-images-uploading';
import { PersonalDetails } from 'src/models/personalDetails';
import styles from './styles.module.css';
import ProfilePic from '../../assets/ProfilePic.png';
import { usePersonalDetails } from 'src/store/personal-details/usePersonalDetails';
import { useState } from 'react';

const PersonalDetailsComponent = () => {
  const { setValue, personalDetails } = usePersonalDetails();
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(ProfilePic);

  const abstractInputValue = (field: PersonalDetails) => {
    return { setValue: (value: string) => setValue(field, value), value: personalDetails[field], label: field };
  };

  const onChange = (image: any) => {
    const img = image[0]['data_url'];
    setImage(img);
    setValue(PersonalDetails.PROFILE_PICTURE, img);
  };

  const onRemove = () => {
    setImage(ProfilePic);
    setValue(PersonalDetails.PROFILE_PICTURE, '');
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
        {/* TODO: Move this component OUT OF HERE! */}
        <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
          {({ onImageUpload }) => (
            <div className={styles.uploadContainer}>
              <img src={image} alt="" className={styles.imageContainer} />
              <div className={styles.buttonContainer}>
                <button onClick={onImageUpload} className={styles.editButton}>
                  Edit photo
                </button>
                <button onClick={onRemove} className={styles.deleteButton}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </ImageUploading>
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
