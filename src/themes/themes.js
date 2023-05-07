export const themes = {
  default: {
    name: 'default',
    mediaQueries: {
      mobileOnly: '(max-width: 959px)',
      tablet: '(min-width: 960px)',
      tabletOnly: '(max-width: 1439px)',
      desktop: '(min-width: 1440px)',
    },
    fontFamily: {
      primary: `'Rubik', 'Helvetica', sans-serif`,
      secondary: `'Open Sans', 'Helvetica', sans-serif`,
    },
    colors: {
      background_main: '#ffffff',
      background_nav: '#F4F6FC',
      background_footer: '#2B2D3A',
      text_main: '#303958',
      text_invert: '#ffffff',
      text_footer: '#EEF3FF',
      accentPrimary_1: '#2D76F9',
      accentPrimary_2: '#303958',
      accentPrimary_3: '#ffffff',
      accentSecondary: '#9AA8BA',
      accentSecondary_disabled: '#C4D2E3',
      toggler: '#C2CBE7',
      burger: '#A5B5CA',
    },
    gradients: {
      main: 'linear-gradient(154.02deg, #E9ECF6 -18.59%, #FFFFFF 64.61%)',
      card: 'linear-gradient(360deg, #090B21 0%, rgba(49, 51, 65, 0) 70.08%)',
      toggler: 'linear-gradient(314.86deg, #FFFFFF 16%, #F3F7FF 95.39%)',
    },
    shadows: {
      accent_1: '8px 15px 57px rgba(227, 231, 244, 0.92)',
      toggler: '-1px 0px 1px rgba(194, 204, 234, 0.31)',
      header: '0px 2px 3px rgba(155, 155, 155, 0.15)',
    },
  },
};
