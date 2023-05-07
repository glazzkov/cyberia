import { css } from 'styled-components';

export const container = css`
  width: 100%;
  min-width: 320px;
  max-width: 1440px;
  padding: 0 24px;
  margin: 0 auto;
  @media (${(props) => props.theme.mediaQueries.tablet}) {
    padding: 0 64px;
  }
  @media (${(props) => props.theme.mediaQueries.desktop}) {
    padding: 0 100px;
  }
`;
