import { Route, Routes, Router, Navigate, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PUBLIC_ROUTES } from './config/routes';
// import { AllProvider } from './Provider';
import { Home } from './pages/home';
import { NotFoundPage } from './pages/404';
// import { Token } from './pages/token';
import { Verify } from './pages/verify';
import { Layout } from 'src/layouts/layout';
import './config/i18n';
import { WalletContextProvider } from "./subwalletcomponents/providers/WalletContextProvider";
import { store } from './redux/store';
function App() {
  return (
    <BrowserRouter>
      <WalletContextProvider>
        <Provider store={store}>
          <Layout>
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Home />} />
              <Route path={PUBLIC_ROUTES.home} element={<Home />} />
              <Route path={PUBLIC_ROUTES.verify} element={<Verify />} />
              <Route path={PUBLIC_ROUTES.error404} element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Provider>
      </WalletContextProvider>
    </BrowserRouter >
  );
}

export default App;
