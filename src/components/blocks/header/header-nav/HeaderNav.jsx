import { useSelector } from 'react-redux';
import { StyledHeaderNav } from './HeaderNav.style';
import { HeaderLinks } from '../header-links/HeaderLinks';
import { HeaderContacts } from '../header-contacts/HeaderContacts';
import { ThemesSwitcher } from '../../../ui/themes-toggler/ThemesSwitcher';

export const HeaderNav = () => {
  const open = useSelector((store) => store.ui.mobileNavOpen);

  return (
    <StyledHeaderNav open={open}>
      <HeaderLinks></HeaderLinks>
      <HeaderContacts></HeaderContacts>
      <ThemesSwitcher></ThemesSwitcher>
    </StyledHeaderNav>
  );
};
