import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { defaultTheme } from '@styles/theme';
import { Router } from '@routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <ToastContainer position="bottom-left" />
      <GlobalStyle />
    </ThemeProvider>
  );
}
