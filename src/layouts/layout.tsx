import React, { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { WalletModal } from "./walletModal";
import { OpenSelectWallet, WalletContext } from '../subwalletcomponents/contexts';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

  const openSelectWalletContext = useContext(OpenSelectWallet);
  const walletContext = useContext(WalletContext);
  const navigate = useNavigate();

  return (

    <>
      {/* <MainContainer> */}
      <Header />
      {children}
      <WalletModal />
      <Footer />
      {/* </MainContainer> */}
    </>
  );
};