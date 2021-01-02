import './styles.css';

import { EmploymentHistory, PersonalDetailsComponent, ProfessionalSummary } from 'src/sections';

const Body = () => (
  <div className="bodyContainer">
    <PersonalDetailsComponent />
    {/* <ProfessionalSummary />
    <EmploymentHistory /> */}
  </div>
);

export default Body;
