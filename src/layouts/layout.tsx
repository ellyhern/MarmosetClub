import styled from 'styled-components';

import { Header } from './header';
import { Footer } from './footer';
import { WalletModal } from "./walletModal";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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