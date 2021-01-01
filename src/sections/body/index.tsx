import './styles.css';

import { EmploymentHistory, PersonalDetails, ProfessionalSummary } from 'src/sections';

const Body = () => (
  <div className="bodyContainer">
    <PersonalDetails />
    <ProfessionalSummary />
    <EmploymentHistory />
  </div>
);

export default Body;
