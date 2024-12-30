/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const localStorageValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

export const ThemeContext = createContext<ThemeContextProps>({
  theme: (localStorageValue as Theme) || Theme.DARK,
});
