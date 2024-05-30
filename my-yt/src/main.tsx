import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './store';
import './index.css';
import './firebase.ts';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
      <BrowserRouter>
      <MantineProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
        </MantineProvider>
      </BrowserRouter> 
  </React.StrictMode>
);
