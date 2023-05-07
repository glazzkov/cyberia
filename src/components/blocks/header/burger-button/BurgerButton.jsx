import { StyledBurgerButton } from './BurgerButton.style';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileNavOpen } from '../../../../store/uiSlice';
import { BurgerOpenIcon } from '../../../icons/BurgerOpenIcon';
import { BurgerCloseIcon } from '../../../icons/BurgerCloseIcon';

export const BurgerButton = ({ ...props }) => {
  const dispatch = useDispatch();
  const open = useSelector((store) => store.ui.mobileNavOpen);
  const ariaLabel = open ? 'Закрыть меню навигации' : 'Открыть меню навигации';

  return (
    <StyledBurgerButton aria-label={ariaLabel} open={open} onClick={() => dispatch(toggleMobileNavOpen())} {...props}>
      {open ? <BurgerCloseIcon /> : <BurgerOpenIcon />}
    </StyledBurgerButton>
  );
};
