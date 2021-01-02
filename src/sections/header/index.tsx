import './styles.css';

import { Completeness, InputClean } from 'src/components';

import { useHeader } from 'src/store/header/useHeader';

const Header = () => {
  const { setName, header } = useHeader();

  return (
    <div className="headerContainer">
      <InputClean fontSize="text-xl" fontWeight="text-normal" value={header.name} setValue={setName} />
      <Completeness />
    </div>
  );
};

export default Header;
