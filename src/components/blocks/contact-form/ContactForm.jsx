import { StyledContactForm } from './ContactForm.style';
import { ContactFormInner } from './styled-elements/ContactFormInner';
import { InputField } from '../../ui/input-field/InputField';
import { PageTitle } from '../page-title/PageTitle';
import { Button } from '../../ui/button/Button';
import { ContactFormInfo } from './styled-elements/ContactFormInfo';
import { ContactFormFields } from './styled-elements/ContactFormFields';
import { ContactFormSubtitle } from './styled-elements/ContactFormSubtitle';
import { ContactFormAgreementBlock } from './styled-elements/ContactFormAgreementBlock';
import { ContactFormAgreementText } from './styled-elements/ContactFormAgreementText';
import { ContactFormMessage } from './styled-elements/ContactFormMessage';
import { InputWithFiles } from '../../ui/input-with-files/InputWithFiles';
import { useState } from 'react';
import { postContactForm } from '../../../store/api';
import { useSelector, useDispatch } from 'react-redux';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const requestStatus = useSelector((store) => store.contactForm.status);
  const [validationErrors, setValidationErrors] = useState({
    email: true,
    phone: true,
  });

  const [files, setFiles] = useState([]);
  const blob = files.length && new Blob(files);

  const handleFileInput = (e) => {
    setFiles([...files, ...e.currentTarget.files]);
    e.currentTarget.value = null;
    e.currentTarget.files = null;
  };

  const handleFileRemove = (index) => {
    setFiles([...files].filter((file, fileIndex) => fileIndex !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    blob ? data.append('attachment', blob) : data.delete('attachment');
    console.log(Object.fromEntries(data));
    console.log(blob);
    dispatch(postContactForm(data));

    e.currentTarget.reset();
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <ContactFormInner>
        <ContactFormInfo>
          <PageTitle as='h2'>
            Расскажите
            <br />
            о&nbsp;вашем проекте
          </PageTitle>
          <ContactFormSubtitle>Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</ContactFormSubtitle>
        </ContactFormInfo>
        <ContactFormFields>
          <InputField
            name='email'
            labelText='E-mail'
            errorMessage={!validationErrors.email && 'Введите корректный email.'}
            required
            type='email'
            onInput={(e) => {
              setValidationErrors({ ...validationErrors, email: e.target.checkValidity() });
            }}
          ></InputField>
          <InputField
            name='phone'
            labelText='Телефон'
            errorMessage={!validationErrors.phone && 'Введите номер в формате +7XXXXXXXXXX.'}
            pattern='\+7[0-9]{10}'
            required
            onInput={(e) => {
              setValidationErrors({ ...validationErrors, phone: e.target.checkValidity() });
            }}
          ></InputField>
          <InputWithFiles nameForText='message' labelText='Сообщение' valid filesList={files} onFileInput={handleFileInput} onFileRemove={handleFileRemove}></InputWithFiles>
          <ContactFormAgreementBlock>
            <Button disabled={requestStatus === 'fullfilled'}>Отправить</Button>
            <ContactFormAgreementText>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных.</ContactFormAgreementText>
          </ContactFormAgreementBlock>
          {requestStatus !== 'idle' && <ContactFormMessage success={requestStatus !== 'error'}>{requestStatus === 'error' ? 'Не удалось отрпавить заявку, повторите отправку позднее.' : 'Ваша заявка успешно отправлена.'}</ContactFormMessage>}
        </ContactFormFields>
      </ContactFormInner>
    </StyledContactForm>
  );
};
