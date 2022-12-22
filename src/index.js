import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
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
import ProfileDetail from './pages/ProfileDetailPage';
import RankPage from './pages/RankPage';
import AddPostPage from './pages/AddPostPage';
import BoardPage from './pages/BoardPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profileDetail" element={<ProfileDetail />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="map" element={<Map />} />
      <Route path="register" element={<GathringRegister />} />
      <Route path="gatheringList" element={<GatheringList />} />
      <Route path="gathering/:id" element={<GatheringDetail />} />
      <Route path="rank" element={<RankPage />} />
      <Route path="addPost" element={<AddPostPage />}/>
      <Route path="board" element={<BoardPage />}/>
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials = true;

const client = new QueryClient();
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <RouterProvider router={router} />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>,
);

reportWebVitals();
