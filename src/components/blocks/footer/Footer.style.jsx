import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.background_footer};
  color: ${(props) => props.theme.colors.text_footer};
  font-size: 13px;
  line-height: 18px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 18px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    font-size: 14px;
    line-height: 19px;
  }
`;
