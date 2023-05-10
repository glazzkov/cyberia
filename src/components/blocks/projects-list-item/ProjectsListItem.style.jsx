import styled from 'styled-components';
import projectDecorationIcon from '../../../assets/icons/project-decoration-icon.svg';

export const StyledProjectsListItem = styled.li`
  & a {
    display: flex;
    position: relative;
    height: 320px;
    overflow: hidden;
    border-radius: 6px;
    padding: 30px;
    flex-direction: column;
    justify-content: flex-end;
    color: ${(props) => props.theme.colors.text_invert};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 200ms;
      background-image: ${(props) => props.theme.gradients.card};
      z-index: 2;
      opacity: 1;
    }

    &:hover::before {
      opacity: 0;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 200ms;
      background-image: ${(props) => props.theme.gradients.card_active};
      opacity: 0;
    }

    &:hover::after {
      opacity: 1;
    }

    @media ${(props) => props.theme.mediaQueries.tablet} {
      height: 395px;
    }

    @media ${(props) => props.theme.mediaQueries.desktop} {
      height: 378px;
    }
  }

  & img {
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
  }

  & div {
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 7px;
    &::before {
      content: '';
      width: 17px;
      height: 17px;
      background-image: url(${projectDecorationIcon});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;

      @media ${(props) => props.theme.mediaQueries.tablet} {
        width: 24px;
        height: 24px;
      }
    }
  }

  & h3 {
    font-family: ${(props) => props.theme.fontFamily.primary};
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    @media ${(props) => props.theme.mediaQueries.tablet} {
      font-size: 28px;
      line-height: 33px;
    }
  }

  & p {
    font-size: 13px;
    line-height: 18px;

    @media ${(props) => props.theme.mediaQueries.tablet} {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
