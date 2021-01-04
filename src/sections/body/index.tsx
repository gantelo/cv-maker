import './styles.css';

import {
  EmploymentHistory,
  PersonalDetailsComponent,
  ProfessionalSummaryComponent,
  EducationHistory,
} from 'src/sections';

const Body = () => (
  <div className="bodyContainer">
    <PersonalDetailsComponent />
    <ProfessionalSummaryComponent />
    <EmploymentHistory />
    <EducationHistory />
  </div>
);

export default Body;
