import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, Router, Navigate, BrowserRouter } from 'react-router-dom';
import { PUBLIC_ROUTES } from './config/routes';
import { Provider } from './Provider';
import { Home } from './pages/home';
import { NotFoundPage } from './pages/404';
import { Token } from './pages/token';
import { Team } from './pages/team';
import { Layout } from 'src/layouts/layout';
import './config/i18n';
import WalletInfo from './subwalletcomponents/WalletInfo';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import '@rainbow-me/rainbowkit/styles.css';
import { WalletContextProvider } from "./subwalletcomponents/providers/WalletContextProvider";
// import { SubstrateContextProvider } from "./utils/substrate";
function App() {
  const [currentWallet, setCurrentWallet] = useState({ name: "", address: "" });
  return (
    <BrowserRouter>
      {/* <SubstrateContextProvider> */}
      <WalletContextProvider>
        <Provider>
          <Layout currentWallet={currentWallet} >
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Home />} />
              <Route path={PUBLIC_ROUTES.home} element={<Home />} />
              <Route path={PUBLIC_ROUTES.nft} element={<Token />} />
              <Route path={PUBLIC_ROUTES.contacts} element={<Team />} />
              <Route path={PUBLIC_ROUTES.walletinfo} element={<WalletInfo setWallet={(data: any) => setCurrentWallet(data)} />} />
              <Route path={PUBLIC_ROUTES.privacy} element={<Privacy />} />
              <Route path={PUBLIC_ROUTES.terms} element={<Terms />} />
              <Route path={PUBLIC_ROUTES.error404} element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Provider>
      </WalletContextProvider>
      {/* </SubstrateContextProvider> */}
    </BrowserRouter >
  );
}

export default App;
