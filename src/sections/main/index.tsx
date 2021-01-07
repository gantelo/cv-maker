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
import { linksFallbackState } from 'src/store/links-history/state';
import { useProfessionalSummary } from 'src/store/professional-summary/useProfessionalSummary';
import { professionalSummaryFallbackState } from 'src/store/professional-summary/state';

const Main = () => {
  const { personalDetails } = usePersonalDetails();
  const { header } = useHeader();
  const { links } = useLinks();
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
        <MyDocument personalDetails={personalDetailsProps} header={headerProps} links={links} pSummary={profSummary} />
      </PDFViewer>
    </div>
  );
};

export default Main;
