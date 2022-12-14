import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './components/Utils/index.css';
import { theme } from './components/Utils/theme';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
