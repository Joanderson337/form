import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { defaultTheme } from '@styles/theme';
import { Router } from '@routes/Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}
