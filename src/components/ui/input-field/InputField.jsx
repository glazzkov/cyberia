import { StyledInputField } from './InputField.style';
import { InputText } from './styled-elements/InputText';
import { Input } from './styled-elements/Input';
import { InputErrorMessage } from './styled-elements/InputErrorMessage';
import { useState } from 'react';

export const InputField = ({ labelText, errorMessage, multiline, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <StyledInputField>
      <Input valid={!errorMessage} {...props} as={multiline && 'textarea'} onFocus={() => setFocus(true)} onBlur={(e) => !e.currentTarget.value && setFocus(false)} />
      <InputText valid={!errorMessage} move={focus}>
        {labelText}
      </InputText>
      {!!errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </StyledInputField>
  );
};
