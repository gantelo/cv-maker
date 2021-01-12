import './styles.css';

import { Body, Footer, Header } from 'src/sections';
import React, { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../pdf-generation';
import { usePersonalDetails } from 'src/store/personal-details/usePersonalDetails';
import { personalDetailsFallbackState } from 'src/store/personal-details/state';
import { useDebounce } from 'src/utils/debounce';
import { useHeader } from 'src/store/header/useHeader';
import { headerFallbackState } from 'src/store/header/state';
import { useLinks } from 'src/store/links-history/useLinks';
import { useProfessionalSummary } from 'src/store/professional-summary/useProfessionalSummary';
import { professionalSummaryFallbackState } from 'src/store/professional-summary/state';
import { useEmploymentHistory } from 'src/store/employment-history/useEmploymentHistory';
import { useEducationHistory } from 'src/store/education-history/useEducationHistory';
import { useSkills } from 'src/store/skills-history/useSkills';
import { useInterests } from 'src/store/interests-history/useInterests';

const Main = () => {
  const { personalDetails } = usePersonalDetails();
  const { header } = useHeader();
  const { links } = useLinks();
  const { skills } = useSkills();
  const { interests } = useInterests();
  const { employmentHistory } = useEmploymentHistory();
  const { educationHistory } = useEducationHistory();
  const { professionalSummary } = useProfessionalSummary();
  const [personalDetailsProps, setPersonalDetailsProps] = useState(personalDetailsFallbackState());
  const [headerProps, setHeaderProps] = useState(headerFallbackState());
  const [profSummary, setProfSummary] = useState(professionalSummaryFallbackState());

  const debouncedHistoryItemUpdate = useDebounce(() => {
    setPersonalDetailsProps(personalDetails);
  }, 1000);

  useEffect(debouncedHistoryItemUpdate, [personalDetails]);

  const headerItemUpdate = useDebounce(() => {
    setHeaderProps(header);
  }, 1000);

  useEffect(headerItemUpdate, [header]);

  const profSummaryUpdate = useDebounce(() => {
    setProfSummary(professionalSummary);
  }, 1000);

  useEffect(profSummaryUpdate, [professionalSummary]);

  return (
    <div className="massiveContainer">
      <div className="mainContainer">
        <Header />
        <Body />
        <Footer />
      </div>
      <PDFViewer className="latexContainer">
        <MyDocument
          personalDetails={personalDetailsProps}
          header={headerProps}
          links={links}
          pSummary={profSummary}
          employment={employmentHistory}
          education={educationHistory}
          skills={skills}
          interests={interests}
        />
      </PDFViewer>
    </div>
  );
};

export default Main;
