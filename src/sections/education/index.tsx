import { HistoryList, InputCleanInline } from 'src/components';

import { useEducationHistory } from 'src/store/education-history/useEducationHistory';

const Education = () => {
  const { setItem, setSectionTitle, educationHistory, addItem, removeItem } = useEducationHistory();

  return (
    <div>
      <InputCleanInline
        fontSize="text-l"
        fontWeight="text-bold"
        defaultValue="Education"
        label="Include relevant education and courses in this section."
        value={educationHistory.sectionTitle}
        setValue={setSectionTitle}
      />
      <HistoryList setItem={setItem} items={educationHistory.items} removeItem={removeItem} addItem={addItem} />
    </div>
  );
};

export default Education;
