import styled from 'styled-components';

export const FileslistItem = styled.li`
  max-width: 382px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.accentSecondary};

  font-size: 14px;
  line-height: 22px;
  max-height: 23px;
`;
