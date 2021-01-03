import './styles.css';

import { EmploymentHistory, PersonalDetailsComponent, ProfessionalSummaryComponent } from 'src/sections';

const Body = () => (
  <div className="bodyContainer">
    <PersonalDetailsComponent />
    <ProfessionalSummaryComponent />
    <EmploymentHistory />
  </div>
);

export default Body;
