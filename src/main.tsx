import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import AppProvider from './contexts/AppContext.tsx';
import FormsProvider from './contexts/FormsContext.tsx';
import ModalsProvider from './contexts/ModalsContext.tsx';
import './index.css';
import { router } from './router.tsx';
import { store } from './store/store.tsx';
import { theme } from './theme.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <FormsProvider>
        <ModalsProvider>
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        </ModalsProvider>
      </FormsProvider>
    </Provider>
  </ThemeProvider>,
);
