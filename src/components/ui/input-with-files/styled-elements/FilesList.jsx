import styled from 'styled-components';

export const FilesList = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background_main};
  margin: 0 1px 1px;
  padding: 20px 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
