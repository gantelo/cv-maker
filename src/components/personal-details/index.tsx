import './styles.css';

import { InputCleanInline } from 'src/components';

const PersonalDetails = () => (
  <div className="personalDetailsContainer">
    <InputCleanInline fontSize="text-l" fontWeight="text-bold" defaultValue="Personal Details" />
  </div>
);

export default PersonalDetails;
