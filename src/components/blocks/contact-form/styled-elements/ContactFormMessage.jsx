import styled from 'styled-components';

export const ContactFormMessage = styled.p`
  color: ${(props) => (props.success ? props.theme.colors.accentSuccess : props.theme.colors.accentInvalid)};
  font-size: 18px;
  line-height: 22px;
`;
