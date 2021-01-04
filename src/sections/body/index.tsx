import './styles.css';

import {
  EducationHistory,
  EmploymentHistory,
  Links,
  PersonalDetailsComponent,
  ProfessionalSummaryComponent,
  Skills,
  Interests,
} from 'src/sections';

const Body = () => (
  <div className="bodyContainer">
    <PersonalDetailsComponent />
    <ProfessionalSummaryComponent />
    <EmploymentHistory />
    <EducationHistory />
    <Links />
    <Skills />
    <Interests />
  </div>
);

export default Body;
