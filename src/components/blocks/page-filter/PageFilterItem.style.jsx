import styled from 'styled-components';

export const StyledPageFilterItem = styled.li`
  & button {
    border: none;
    background-color: ${(props) => props.theme.colors.accentPrimary_3};
    padding: 9px;
    font-size: 12px;
    line-height: 16px;
    border-radius: 7px;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.shadows.accent_1};
    transition: 200ms;

    &:disabled {
      background-color: ${(props) => props.theme.colors.accentPrimary_1};
      color: ${(props) => props.theme.colors.text_invert};
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors.accentPrimary_2};
      color: ${(props) => props.theme.colors.text_invert};
    }

    @media ${(props) => props.theme.mediaQueries.tablet} {
      padding: 10px 30px;
      font-size: 16px;
      line-height: 22px;
    }

    @media ${(props) => props.theme.mediaQueries.desktop} {
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      font-family: ${(props) => props.theme.fontFamily.primary};
    }
  }
`;
