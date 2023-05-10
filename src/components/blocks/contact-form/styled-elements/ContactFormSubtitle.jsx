import styled from 'styled-components';

export const ContactFormSubtitle = styled.p`
  font-size: 14px;
  line-height: 22px;
  @media ${(props) => props.theme.mediaQueries.mobileOnly} {
    display: none;
  }
`;
