import { useSelector } from 'react-redux';

import { StyledHeader } from './Header.style';
import { HeaderInner } from './header-inner/HeaderInner';
import { HeaderLogo } from './header-logo/HeaderLogo';
import { BurgerButton } from './burger-button/BurgerButton';
import { HeaderNav } from './header-nav/HeaderNav';

export const Header = () => {
  const open = useSelector((store) => store.ui.mobileNavOpen);
  const scrollY = useSelector((store) => store.ui.scrollY);
  const deltaScrollY = useSelector((store) => store.ui.deltaScrollY);
  const showOnScroll = open || deltaScrollY <= 0 || scrollY < 120;
  const inheritBackground = scrollY <= 0;

  return (
    <StyledHeader inheritBackground={inheritBackground} showOnScroll={showOnScroll} scrollY={scrollY} deltaScrollY={deltaScrollY} open={open}>
      <HeaderInner>
        <HeaderLogo></HeaderLogo>
        <BurgerButton></BurgerButton>
        <HeaderNav></HeaderNav>
      </HeaderInner>
    </StyledHeader>
  );
};
