import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { Provider } from './Provider';
import { Home } from './pages/home';
import { NotFoundPage } from './pages/404';
import { Token } from './pages/token';

import { Team } from './pages/team';
import { Layout } from 'src/layouts/layout';

import './config/i18n';
import { Staking } from './pages/staking';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CustomConnectButton } from "./components/sections/MComonents/walletConnect";
import '@rainbow-me/rainbowkit/styles.css';

import { WalletContextProvider } from "./subwalletcomponents/providers/WalletContextProvider"
function App() {
  return (
    <Suspense fallback={<>Loading</>}>

      <Router>
        <WalletContextProvider>
          <Provider>
            <Layout>
              <Routes>
                <Route path={PUBLIC_ROUTES.default} element={<Home />} />
                <Route path={PUBLIC_ROUTES.home} element={<Home />} />
                <Route path={PUBLIC_ROUTES.nft} element={<Token />} />
                <Route path={PUBLIC_ROUTES.contacts} element={<Team />} />
                <Route path={PUBLIC_ROUTES.articles} element={<Staking />} />
                <Route path={PUBLIC_ROUTES.privacy} element={<Privacy />} />
                <Route path={PUBLIC_ROUTES.terms} element={<Terms />} />
                <Route path={PUBLIC_ROUTES.error404} element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to={PUBLIC_ROUTES.error404} replace />} />
              </Routes>
            </Layout>
          </Provider>
        </WalletContextProvider>
      </Router>

    </Suspense >
  );
}

export default App;
