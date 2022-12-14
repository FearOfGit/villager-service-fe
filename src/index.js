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
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import Root from './routes/root';
import theme from './styles/theme/theme';
import 'react-toastify/dist/ReactToastify.css';

import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import Profile from './pages/ProfilePage';
import Map from './pages/MapPage';
import GathringRegister from './pages/GatheringRegisterPage';
import Main from './pages/MainPage';
import GatheringList from './pages/GatheringListPage';
import GatheringDetail from './pages/GatheringDetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="map" element={<Map />} />
      <Route path="register" element={<GathringRegister />} />
      <Route path="gatheringList" element={<GatheringList />} />
      <Route path="gathering/:id" element={<GatheringDetail />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
);

reportWebVitals();
