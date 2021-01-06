import './styles.css';

import { Body, Header } from 'src/sections';
import React, { memo, useEffect, useRef, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../pdf-generation';
import { usePersonalDetails } from 'src/store/personal-details/usePersonalDetails';
import { personalDetailsFallbackState } from 'src/store/personal-details/state';
import { useDebounce } from 'src/utils/debounce';

const Main = () => {
  const { personalDetails } = usePersonalDetails();
  const [personalDetailsProps, setPersonalDetailsProps] = useState(personalDetailsFallbackState);

  const debouncedHistoryItemUpdate = useDebounce(() => {
    setPersonalDetailsProps(personalDetails);
  }, 1000);

  useEffect(debouncedHistoryItemUpdate, [personalDetails]);

  return (
    <div className="massiveContainer">
      <div className="mainContainer">
        <Header />
        <Body />
      </div>
      <PDFViewer className="latexContainer">
        <MyDocument personalDetails={personalDetailsProps} />
      </PDFViewer>
    </div>
  );
};

export default Main;
