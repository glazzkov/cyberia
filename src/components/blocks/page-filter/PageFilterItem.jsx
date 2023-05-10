import { StyledPageFilterItem } from './PageFilterItem.style';

export const PageFilterItem = ({ children, active, onClick }) => {
  return (
    <StyledPageFilterItem>
      <button disabled={active} onClick={onClick}>
        {children}
      </button>
    </StyledPageFilterItem>
  );
};
