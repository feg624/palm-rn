import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

export const CombinedDefaultTheme = merge(
  NavigationDefaultTheme,
  {
    ...PaperDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      primary: '#7049ba' // Guidoli-Florio
    }
  },
);
export const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
