import { HeaderLink } from './HeaderLink';
import { StyledHeaderLinksItem } from './HeaderLinksItem.style';

export const HeaderLinksItem = ({ hiddenOnDesktop, hiddenOnMobile, children, ...props }) => {
  return (
    <StyledHeaderLinksItem hiddenOnDesktop={hiddenOnDesktop} hiddenOnMobile={hiddenOnMobile}>
      <HeaderLink {...props}>{children}</HeaderLink>
    </StyledHeaderLinksItem>
  );
};
