import styled from 'styled-components';

export const Input = styled.input`
  font-size: 13px;
  line-height: 18px;
  border: 1px solid ${(props) => (props.valid ? props.theme.colors.accentSecondary : props.theme.colors.accentInvalid)};
  padding: 17px 14px;
  border-radius: 8px;
  outline: none;
  width: 100%;
  height: 100%;
  resize: none;
  flex-grow: 5;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 14px;
    line-height: 22px;
    padding: 17px 18px;
  }
`;
