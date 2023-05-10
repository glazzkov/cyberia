import { HeaderLink } from './HeaderLink';
import { StyledHeaderLinksItem } from './HeaderLinksItem.style';
import { useDispatch } from 'react-redux';
import { setMobileNavOpenState } from '../../../../store/uiSlice';

export const HeaderLinksItem = ({ hiddenOnDesktop, hiddenOnMobile, children, ...props }) => {
  const dispatch = useDispatch();

  return (
    <StyledHeaderLinksItem hiddenOnDesktop={hiddenOnDesktop} hiddenOnMobile={hiddenOnMobile}>
      <HeaderLink onClick={() => dispatch(setMobileNavOpenState(false))} {...props}>
        {children}
      </HeaderLink>
    </StyledHeaderLinksItem>
  );
};
