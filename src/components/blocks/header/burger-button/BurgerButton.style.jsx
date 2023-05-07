import styled from 'styled-components';

export const StyledBurgerButton = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.burger};
  width: 32px;
  height: 32px;
  position: absolute;
  top: 18px;
  right: 24px;
  transition: 300ms;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    right: 64px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: none;
  }

  & svg {
    @media ${(props) => props.theme.mediaQueries.mobileOnly} {
      transform: ${(props) => (props.open ? 'scale(70%)' : 'scaleY(70%)')};
    }
  }
`;
