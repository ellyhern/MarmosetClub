import { Header } from './header';
import { Footer } from './footer';
import { WalletModal } from "./walletModal";
export const Layout = (props: any) => {

  return (
    <>
      {/* <MainContainer> */}
      <Header />
      {props.children}
      <WalletModal />
      <Footer />
      {/* </MainContainer> */}
    </>
  );
};