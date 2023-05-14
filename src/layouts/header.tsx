import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStore } from '../context/StoreContext';
import { CustomConnectButton } from "../components/sections/MComonents/walletConnect"
export const Header = () => {
  const { t, i18n } = useTranslation();

  const mbDropRef = useRef<HTMLDivElement>(null);
  const DsDropRef = useRef<HTMLDivElement>(null);

  const [isDeskOpen, deskSetOpen] = useState(false);
  const [isMobOpen, mobSetOpen] = useState(false);

  const { lang, setLang } = useStore();

  const navigate = useNavigate();

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (mbDropRef.current != null && !mbDropRef.current.contains(event.target as any)) {
      mobSetOpen(false);
    }
    if (DsDropRef.current != null && !DsDropRef.current.contains(event.target as any)) {
      deskSetOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
  }, [mbDropRef, DsDropRef]);

  useEffect(() => {
    setLang(lang);
  }, [lang]);

  const LanguageChoose = (e: any) => {
    let language = e.target.innerHTML;
    switch (language) {
      case 'ENGLISH':
        setLang('ENG');
        language = 'English';
        break;
      case 'ESPAÑOL':
        setLang('ESP');
        language = 'Spanish';
        break;
      case 'ITALIANO':
        setLang('ITA');
        language = 'Italian';
        break;
      case 'FRANÇAIS':
        setLang('FR');
        language = 'French';
        break;
      case 'DEUTSCH':
        setLang('DE');
        language = 'German';
        break;
      case '中文':
        setLang('中文');
        language = 'Chinese';
        break;
      default:
        break;
    }
    i18n.changeLanguage(language);
    deskSetOpen(false);
    mobSetOpen(false);
  };

  return (
    <>
      {/* <HeaderContent> */}
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <button className="header__btn" type="button" aria-label="header__nav">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <a href="/" className="header__logo" >
                  <img src="img/customcolor_logo_transparent_background-300x180.png" alt="" style={{ height: "12px !important" }} />
                </a>
                <ul className="header__nav" id="header__nav">
                  <li className="header__dropdown">
                    <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
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
                <CustomConnectButton />
                {/* <button type="button" data-bs-toggle="modal" className="header__cta" data-bs-target="#modal-wallet">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" /></svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};