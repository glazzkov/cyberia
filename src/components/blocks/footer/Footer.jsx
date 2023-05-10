import { StyledFooter } from './Footer.style';
import { FooterInner } from './styled-elements/FooterInner';
import { FooterHeading } from './styled-elements/FooterHeading';
import { FooterMain } from './styled-elements/FooterMain';
import { FooterGroup } from './styled-elements/FooterGroup';
import { FooterCopyright } from './styled-elements/FooterCopyright';
import { FooterLogo } from '../../ui/footer-logo/FooterLogo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <FooterHeading>
          <FooterLogo></FooterLogo>
          <p>
            Web and machine learning <br /> developing company
          </p>
        </FooterHeading>
        <FooterMain>
          <FooterGroup>
            <li>
              <a href='tel:+74996794579' aria-label='Номер телефона:'>
                +7 499 679 45 79
              </a>
            </li>
            <li>
              <a href='hello@cyberia.ru' aria-label='Электронная почта:'>
                hello@cyberia.ru
              </a>
            </li>
            <li>
              <address aria-label='Адрес: '>Аносова 3Б, оф. 1</address>
            </li>
          </FooterGroup>
          <FooterGroup>
            <li>
              <Link to='/' replace>
                Главная
              </Link>
            </li>
            <li>
              <Link to='catalog' replace>
                Услуги
              </Link>
            </li>
            <li>
              <Link to='projects' replace>
                Проекты
              </Link>
            </li>
          </FooterGroup>
          <FooterGroup>
            <li>
              <Link to='blog' replace>
                Блог
              </Link>
            </li>
            <li>
              <Link to='about' replace>
                О нас
              </Link>
            </li>
            <li>
              <Link to='team' replace>
                Команда
              </Link>
            </li>
          </FooterGroup>
        </FooterMain>
        <FooterCopyright>
          <li>2022, digital-агентство Cyberia</li>
          <li>
            <Link to='blank' replace>
              Положение о защите персональных данных
            </Link>
          </li>
          <li>
            <Link to='blank' replace>
              Политика в отношении обработки и защиты персональных данных
            </Link>
          </li>
          <li>
            <Link to='blank' replace>
              Оферта оказания услуг
            </Link>
          </li>
        </FooterCopyright>
      </FooterInner>
    </StyledFooter>
  );
};
