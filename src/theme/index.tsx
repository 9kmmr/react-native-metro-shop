import React, {createContext, ReactNode} from 'react';

import typography from './typo';
import colors from './colors';

const theme = {
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  colors,
  typography,
};

export type Theme = typeof theme;

export const ThemeContext = createContext(theme);

