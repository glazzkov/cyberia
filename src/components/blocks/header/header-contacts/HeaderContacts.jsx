import { StyledHeaderContacts } from './HeaderContacts.style';
import { HeaderContactsTitle } from '../header-contacts-title/HeaderContactsTitle';
import { HeaderContactsList } from '../header-contacts-list/HeaderContactsList';
import { Link } from 'react-router-dom';

export const HeaderContacts = () => {
  return (
    <StyledHeaderContacts>
      <Link to='contacts' replace>
        <HeaderContactsTitle>Контакты:</HeaderContactsTitle>
      </Link>
      <HeaderContactsList></HeaderContactsList>
    </StyledHeaderContacts>
  );
};
