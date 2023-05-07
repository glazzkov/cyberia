import { StyledHeaderInner } from './HeaderInner.style';
import { useSelector } from 'react-redux';

export const HeaderInner = ({ children }) => {
  const open = useSelector((store) => store.ui.mobileNavOpen);
  return <StyledHeaderInner open={open}>{children}</StyledHeaderInner>;
};
