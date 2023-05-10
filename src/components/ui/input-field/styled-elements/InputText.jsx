import styled from 'styled-components';

export const InputText = styled.span`
  color: ${(props) => (props.valid ? props.theme.colors.accentSecondary : props.theme.colors.accentInvalid)};
  background-color: ${(props) => (props.move ? props.theme.colors.background_main : 'inherit')};
  padding: 0 10px;
  border-radius: 5px;
  position: absolute;
  left: 14px;
  top: ${(props) => (props.move ? '-9px' : '17px')};
  transition: 300ms;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    left: 18px;
  }
`;
