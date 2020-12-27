import './styles.css';

import { Completeness, InputClean } from 'src/components';

const Header = () => {
  return (
    <div className="headerContainer">
      <InputClean fontSize="text-xl" />
      <Completeness />
    </div>
  );
};

export default Header;
