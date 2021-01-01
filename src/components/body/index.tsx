import './styles.css';

import { EmploymentHistory, PersonalDetails, ProfessionalSummary } from 'src/components';

const Body = () => (
  <div className="bodyContainer">
    <PersonalDetails />
    <ProfessionalSummary />
    <EmploymentHistory />
  </div>
);

export default Body;
