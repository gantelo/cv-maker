import { MinimalHistoryList, InputCleanInline } from 'src/components';

import { useLinks } from 'src/store/links-history/useLinks';

const Links = () => {
  const { setItem, setSectionTitle, links, addItem, removeItem } = useLinks();

  return (
    <div>
      <InputCleanInline
        fontSize="text-l"
        fontWeight="text-bold"
        defaultValue={'Links & More'}
        label="Include links and references here."
        value={links.sectionTitle}
        setValue={setSectionTitle}
      />
      <MinimalHistoryList setItem={setItem} items={links.items} removeItem={removeItem} addItem={addItem} />
    </div>
  );
};

export default Links;
