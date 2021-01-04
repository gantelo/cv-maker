import { MinimalHistoryList, InputCleanInline } from 'src/components';

import { useSkills } from 'src/store/skills-history/useSkills';

const Skills = () => {
  const { setItem, setSectionTitle, skills, addItem, removeItem } = useSkills();

  return (
    <div>
      <InputCleanInline
        fontSize="text-l"
        fontWeight="text-bold"
        defaultValue={'Skills'}
        label="List your skills with your expertise."
        value={skills.sectionTitle}
        setValue={setSectionTitle}
      />
      <MinimalHistoryList setItem={setItem} items={skills.items} removeItem={removeItem} addItem={addItem} />
    </div>
  );
};

export default Skills;
