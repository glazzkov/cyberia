import styled from 'styled-components';

export const StyledInputField = styled.label`
  font-size: 13px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 5;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 14px;
    line-height: 22px;
  }
`;
