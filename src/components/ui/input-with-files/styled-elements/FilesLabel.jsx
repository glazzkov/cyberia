import styled from 'styled-components';

export const FilesLabel = styled.label`
  cursor: pointer;
  position: absolute;
  bottom: 9px;
  right: 7px;
  transition: 200ms;
  color: ${(props) => props.theme.colors.accentSecondary};
  z-index: 2;

  &:hover,
  &:focus-within {
    color: ${(props) => props.theme.colors.accentPrimary_1};
  }

  @media ${(props) => props.theme.mediaQueries.tablet} {
    bottom: 11px;
    right: 11px;
  }
`;
