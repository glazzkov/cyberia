import { StyledHeaderLogo } from './HeaderLogo.style';
import { LogoIcon } from '../../../icons/LogoIcon';
import { useSelector } from 'react-redux';

export const HeaderLogo = () => {
  const open = useSelector((store) => store.ui.mobileNavOpen);
  return (
    <StyledHeaderLogo open={open} to='/' aria-label='Лого Cyberia'>
      <LogoIcon></LogoIcon>
    </StyledHeaderLogo>
  );
};
