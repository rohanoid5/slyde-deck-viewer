import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { defaultThemeOptions } from './theme/default';

import Deck from './components/Deck';

import './index.css';

const HelloWorld = () => {
  const message = 'Hello, World!!!';

  const theme = createTheme(defaultThemeOptions);

  return (
    <div className="main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Deck />
        <Container>
          <h1>{message}</h1>
          <Button variant="contained">Hello World</Button>
        </Container>
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
