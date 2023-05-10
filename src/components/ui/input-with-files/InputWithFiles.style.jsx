import styled from 'styled-components';

export const StyledInputWithFiles = styled.div`
  position: relative;
  height: ${(props) => `${props.filesCount * 50 + 140}px`};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    height: ${(props) => `${props.filesCount * 50 + 92}px`};
  }

  & * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.accentSecondary} ${(props) => props.theme.colors.text_footer};
  }

  & ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.text_footer};
    width: 5px;
    border-radius: 3px;
  }

  & ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.accentSecondary};
  }
`;
