import { StyledInputWithFiles } from './InputWithFiles.style';
import { InputField } from '../input-field/InputField';
import { PaperclipIcon } from '../../icons/PaperclipIcon';
import { FilesLabel } from './styled-elements/FilesLabel';
import { FilesInput } from './styled-elements/FilesInput';
import { FilesList } from './styled-elements/FilesList';
import { FileslistItem } from './styled-elements/FilesListItem';
import { FilesListItemSpan } from './styled-elements/FilesListItemSpan';
import { FileSizeSpan } from './styled-elements/FileSizeSpan';
import { FileDisableButton } from './styled-elements/FileDisableButton';
import { CrossIcon } from '../../icons/CrossIcon';

export const InputWithFiles = ({ nameForText, nameForFiles, valid, labelText, textValue, filesList, onFileInput, onFileRemove, onTextInput }) => {
  const getFileSize = (sizeInBytes) => {
    if (sizeInBytes <= 1024) return `${sizeInBytes} Б`;
    if (sizeInBytes > 1024 && sizeInBytes <= 1024 * 1024) return `${Math.floor(sizeInBytes / 1024)} КБ`;
    return `${Math.floor(sizeInBytes / (1024 * 1024))} МБ`;
  };

  return (
    <StyledInputWithFiles filesCount={filesList.length}>
      <InputField multiline value={textValue} type='text' name={nameForText} valid={valid} labelText={labelText} onInput={onTextInput}></InputField>
      <FilesLabel aria-label='Прикрепить файлы'>
        <FilesInput multiple onInput={onFileInput} type='file' name={nameForFiles}></FilesInput>
        <PaperclipIcon></PaperclipIcon>
      </FilesLabel>
      {!!filesList.length && (
        <FilesList>
          {filesList.map((file, index) => {
            return (
              <FileslistItem key={`${file.name}-${file.size}`} title={file.name}>
                <FilesListItemSpan>{file.name}</FilesListItemSpan>
                <FileSizeSpan>({getFileSize(file.size)})</FileSizeSpan>
                <FileDisableButton type='button' onClick={() => onFileRemove(index)} aria-label={`Открепить файл '${file.name}'`}>
                  <CrossIcon></CrossIcon>
                </FileDisableButton>
              </FileslistItem>
            );
          })}
        </FilesList>
      )}
    </StyledInputWithFiles>
  );
};
