import React from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
  fontSizes: {
    xs: '0.8rem', //8px
    sm: '1.2rem', //12px,
    md: '1.6rem', //16px,
    lg: '1.8rem', //18px
    xl: '2rem', //20px
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 900,
  },
  lineHeight: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },

  fontFamily: ['Noto Sans JP', 'sans-serif'],

  colors: {
    offWhite: '#ecf0f1',
    white: '#fff',
    blue: {
      50: '#34495e',
      100: '#2c3e50',
      150: '#071a52',
    },
  },
  backgroundColor: {},

  styleVar: {
    navHeight: '6rem',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
