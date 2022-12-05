import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import Root from './routes/root';
import theme from './styles/theme/theme';

import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import Profile from './pages/ProfilePage';
import Map from './pages/MapPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="profile" element={<Profile my />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="map" element={<Map />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
