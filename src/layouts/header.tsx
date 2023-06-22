import React, { useState, useRef, useEffect, useContext, useCallback } from 'react';
import { WalletContext } from '../subwalletcomponents/contexts';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { setWalletAddress } from '../redux/action';
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
  const [curWallet, setCurWallet] = useState<any>({});
  const stateData = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (mbDropRef.current != null && !mbDropRef.current.contains(event.target as any)) {
      mobSetOpen(false);
    }
    if (DsDropRef.current != null && !DsDropRef.current.contains(event.target as any)) {
      deskSetOpen(false);
    }
  };

  const walletContext = useContext(WalletContext);

  const ongohome = () => navigate('/');

  useEffect(() => {
    console.log(stateData);
    const walletmarmoset = window.localStorage.getItem("marmoset");
    if (walletmarmoset && walletmarmoset?.length > 3) {
      const parsedData = JSON.parse(walletmarmoset);
      setCurWallet(parsedData);
    }
    else {
      if (walletContext.accounts.length > 0) {

        setCurWallet(walletContext.accounts[0]);
        const account = walletContext?.accounts?.[0];
        const accountString = JSON.stringify(account);
        window.localStorage.setItem("marmoset", accountString);
      }
    }
  }, [walletContext]);

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
  }, [mbDropRef, DsDropRef]);

  useEffect(() => {
    console.log("========================localStorage========================");
    const walletmarmoset = window.localStorage.getItem("marmoset");
    if (walletmarmoset && walletmarmoset?.length > 3) {
      const parsedData = JSON.parse(walletmarmoset);
      dispatch(setWalletAddress(parsedData?.address));
      // toastr.success("Wallet successfully changed!");
      setWalletInfo(`${parsedData?.name}: ${parsedData?.address.slice(0, 5)}`);
    }
  }, [window.localStorage.getItem("marmoset")]);


  const onSignClicked = useCallback(
    (ac: any) => {
      setCurWallet(ac);
      const account = ac;
      const accountString = JSON.stringify(account);
      toastr.success("Wallet successfully changed!");
      window.localStorage.setItem("marmoset", accountString);
      return () => { console.log("====================") };
    },
    []
  );

  const onDisconnect = () => {
    window.localStorage.removeItem("marmoset");
    toastr.warning("Wallet successfully disconnected!");
    setCurWallet({});
  };


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

                  <li className="header__dropdown">
                    <a className="dropdown-link" href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
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
                {

                  !curWallet.name ? <button type="button"
                    data-bs-toggle="modal"
                    style={{ color: "white" }}
                    className="header__cta header__dropdown"
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
                    {"Connect"}
                  </button> :
                    <ul className="" style={{ borderRadius: "18px", border: "2px solid rgba(170, 114, 206, 0.12)", padding: "5px" }}>
                      <li className="header__dropdown ">
                        <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {curWallet.name}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg>
                        </a>
                        {walletContext.accounts.length > 0 ? <ul className="dropdown-menu header__dropdown-menu">
                          {

                            walletContext.accounts.map((ac) => {
                              if (ac.name !== curWallet.name)
                                return (<li key={ac.address} onClick={() => onSignClicked(ac)}>
                                  <a href="#">{`${ac.name}`}</a>
                                </li>);
                              else return <></>
                            })
                          }
                          <li>
                            <a href='#' onClick={onDisconnect}
                              className="disconnect">Disconnect</a>
                          </li>
                        </ul> : ""}

                      </li>
                    </ul>
                }

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

