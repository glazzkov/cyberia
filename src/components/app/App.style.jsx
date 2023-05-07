import styled from 'styled-components';

export const StyledApp = styled.div`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  background-color: ${(props) => props.theme.colors.background_main};
  background: ${(props) => props.theme.gradients.main};
  color: ${(props) => props.theme.colors.text_main};
`;
