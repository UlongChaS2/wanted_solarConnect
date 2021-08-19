import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import mixin from 'styles/mixin';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={mixin}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
