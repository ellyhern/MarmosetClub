import React, { useState, useRef, useEffect, useContext } from 'react';
import { useStore } from '../context/StoreContext';
import { WalletContext } from '../subwalletcomponents/contexts';
import { useNavigate } from 'react-router-dom';
import { SUPPORTED_WALLET_LIST } from "../constants/index";

interface WalletButton {
  src?: string;
  alt?: string;
}

interface WalletBtnName {
  name: string;
  address: string;
  logo?: WalletButton;
}

export const Header = (props: any) => {
  const navigate = useNavigate();
  const mbDropRef = useRef<HTMLDivElement>(null);
  const DsDropRef = useRef<HTMLDivElement>(null);
  const [, deskSetOpen] = useState(false);
  const [, mobSetOpen] = useState(false);
  const [walletBtnName, setWalletBtnName] = useState<WalletBtnName>({ name: "Connect", address: "" });
  const [walletInfo, setWalletInfo] = useState<string>("");
  const { lang, setLang } = useStore();

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (mbDropRef.current != null && !mbDropRef.current.contains(event.target as any)) {
      mobSetOpen(false);
    }
    if (DsDropRef.current != null && !DsDropRef.current.contains(event.target as any)) {
      deskSetOpen(false);
    }
  };

  const walletContext = useContext(WalletContext);
  const connectWalletInfo = () => navigate('/wallet-info');
  const ongohome = () => navigate('/');

  useEffect(() => {
    if (walletContext.accounts.length > 0) {
      const walletmarmoset = window.localStorage.getItem("marmoset");
      if (walletmarmoset && walletmarmoset?.length > 3) {

        const parsedData = JSON.parse(walletmarmoset);
        setWalletBtnName({ name: parsedData?.name, address: parsedData?.address.slice(0, 5), logo: walletContext.wallet?.logo ?? undefined });
      }

    }
    // const ttg = walletContext.accounts.find((af) => af.address === props.currentWallet);
    // console.log(ttg);
    // if (ttg) setWalletInfo(`${ttg?.name}: ${ttg?.address.slice(0, 5)}`);
    // else setWalletInfo("");

  }, [walletContext, props.currentWallet]);

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
  }, [mbDropRef, DsDropRef]);

  useEffect(() => {
    setLang(lang);
  }, [lang]);

  useEffect(() => {
    const walletmarmoset = window.localStorage.getItem("marmoset");
    if (walletmarmoset && walletmarmoset?.length > 3) {

      const parsedData = JSON.parse(walletmarmoset);
      setWalletInfo(`${parsedData?.name}: ${parsedData?.address.slice(0, 5)}`);

    }

  }, [window.localStorage.getItem("marmoset")]);
  return (
    <>
      {/* <HeaderContent> */}
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content" >
                <button className="header__btn" type="button" aria-label="header__nav">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <a href="/" className="header__logo" >
                  <img src="img/customcolor_logo_transparent_background-300x180.png" onClick={ongohome} alt="" style={{ height: "12px !important" }} />
                </a>
                <ul className="header__nav" id="header__nav">
                  <li className="header__dropdown">
                    <a className="dropdown-link" href="/" role="button" aria-expanded="false">Home</a>
                  </li>

                  <li className="header__dropdown">
                    <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Games
                    </a>
                  </li>

                  <li className="header__dropdown">
                    <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Earn
                    </a>
                  </li>

                  <li>
                    <a href="/about">Learn more</a>
                  </li>
                  <li className="header__dropdown">
                    <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages
                    </a>
                  </li>

                  <li className="header__dropdown">
                    <a className="dropdown-link dropdown-link--menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    </a>
                  </li>
                </ul>
                {/* <CustomConnectButton /> */}
                {/* <button type="button"
                  data-bs-toggle="modal"
                  style={{ color: "white" }}
                  className="header__cta">
                  {walletInfo}
                </button> */}
                <button type="button"
                  data-bs-toggle="modal"
                  style={{ color: "white" }}
                  className="header__cta"
                  onClick={connectWalletInfo}
                  data-bs-target={"#modal-wallet"}>
                  {
                    walletBtnName.address.length === 0 ?
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" /></svg>
                      : <img
                        alt={walletBtnName?.logo?.alt ?? ''}
                        className='wallet-logo-header'
                        src={walletBtnName?.logo?.src ?? ''}
                      />
                  }
                  {walletBtnName.name + walletBtnName.address}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};