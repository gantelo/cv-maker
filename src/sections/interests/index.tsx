import { InputCleanInline, MinimalHistoryList } from 'src/components';

import { useInterests } from 'src/store/interests-history/useInterests';

const Links = () => {
  const { setItem, setSectionTitle, interests, addItem, removeItem } = useInterests();

  return (
    <div>
      <InputCleanInline
        fontSize="text-l"
        fontWeight="text-bold"
        defaultValue={'Interests'}
        label="Include interests and hobbies if any."
        value={interests.sectionTitle}
        setValue={setSectionTitle}
      />
      <MinimalHistoryList
        setItem={setItem}
        items={interests.items}
        removeItem={removeItem}
        addItem={addItem}
        nameOnly
      />
    </div>
  );
};

export default Links;
