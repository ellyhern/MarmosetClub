import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { Container } from '../components/container/container';

import { LogoHeader, MenuKingfloki, MenuKingland, MenuKingpad } from '../config/images';

import { useTranslation } from 'react-i18next';
import { useStore } from '../context/StoreContext';
import { CustomConnectButton } from 'src/components/button';

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

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li><a href="index.html">Home style v1</a></li>
                      <li><a href="index2.html">Home style v2</a></li>
                      <li><a href="index3.html">Home style v3</a></li>
                    </ul>
                  </li>

                  <li className="header__dropdown">
                    <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Games <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li><a href="aggregator.html">Aggregator</a></li>
                      <li><a href="ranking.html">Ranking</a></li>
                      <li><a href="game.html">Game details</a></li>
                      <li><a href="add.html">Add new game</a></li>
                    </ul>
                  </li>

                  <li className="header__dropdown">
                    <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Earn <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li><a href="staking.html">Staking</a></li>
                      <li><a href="leaderboard.html">Leaderboard</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="about.html">Learn more</a>
                  </li>

                  <li className="header__dropdown">
                    <a className="dropdown-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li><a href="faq.html">Help center</a></li>
                      <li><a href="blog.html">Blog style 1</a></li>
                      <li><a href="blog2.html">Blog style 2</a></li>
                      <li><a href="article.html">Article</a></li>
                      <li><a href="gallery.html">Photo gallery</a></li>
                      <li><a href="contacts.html">Contacts</a></li>
                    </ul>
                  </li>

                  <li className="header__dropdown">
                    <a className="dropdown-link dropdown-link--menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" /></svg></a>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li><a href="signin.html">Sign in</a></li>
                      <li><a href="signup.html">Sign up</a></li>
                      <li><a href="forgot.html">Forgot password</a></li>
                      <li><a href="404.html">404 Page</a></li>
                      <li><a href="privacy.html">Privacy policy</a></li>
                    </ul>
                  </li>
                </ul>
                <button type="button" data-bs-toggle="modal" className="header__cta" data-bs-target="#modal-wallet">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" /></svg>
                  <span>Connect</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* </HeaderContent> */}
    </>
  );
};

// const HeaderContent = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding-top: 3rem;

//   @media screen and (max-width: 640px) {
//     justify-content: center;
//     gap: 0;
//   }
// `;

// const DesktopLogo = styled.img`
//   display: block;
//   width: 75px;
//   height: auto;
//   cursor: pointer;

//   @media screen and (max-width: 640px) {
//     display: none;
//   }
// `;

// const RectButtonGroup = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: end;
//   /* width: 100%; */
//   min-width: 1px;
//   gap: 10px;
//   @media screen and (max-width: 1096px) {
//     justify-content: space-between;
//     flex-direction: column;
//     align-items: flex-end;
//   }
//   @media screen and (max-width: 640px) {
//     align-items: stretch;
//   }
// `;

// const LogoButtons = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const MobileLogo = styled.img`
//   display: none;
//   margin-left: 1rem;
//   cursor: pointer;

//   @media screen and (max-width: 640px) {
//     display: block;
//     width: 60px;
//     height: auto;
//   }

//   @media screen and (max-width: 420px) {
//     width: 50px;
//     height: auto;
//   }
// `;

// const RectButtons = styled.div`
//   display: flex;
//   gap: 10px;
//   font-family: 'gotham-bold';
//   align-items: center;
//   @media screen and (max-width: 480px) {
//     gap: 0;
//   }
// `;

// const RectButton = styled.div`
//   background: #1d1d1d;
//   border-radius: 28px;
//   letter-spacing: 0.875px;
//   color: ${(props) => props.theme.white};
//   text-transform: uppercase;
//   border: none;
//   padding: 0px 18px;
//   height: 47px;
//   font-size: 13px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;

//   @media screen and (max-width: 640px) {
//     background: none;
//     padding: 10px;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 10px;
//     padding: 0;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   background: #1d1d1d 0% 0% no-repeat padding-box;
//   border-radius: 31px;
//   justify-content: center;

//   &:hover {
//     .btn-kingfloki,
//     .btn-kingland,
//     .btn-kingpad {
//       filter: grayscale(1) brightness(0.5);
//     }
//   }
// `;

// const KingFlokiButton = styled.div`
//   background-image: url(${MenuKingfloki});
//   background-repeat: no-repeat;
//   background-size: 80%;
//   background-position: center center;
//   width: 125px;
//   height: 23px;

//   transition: all linear 0.6s;

//   &:hover {
//     filter: grayscale(0) !important;
//   }

//   padding: 12px 10px;

//   @media screen and (max-width: 480px) {
//     padding: 2px 8px;
//     width: 100px;
//     height: 36px;
//     background-size: 80%;
//   }

//   @media screen and (max-width: 420px) {
//     padding: 0;
//     width: 100px;
//     height: 36px;
//     background-size: 80%;
//   }
// `;
// const KingLandButton = styled.div`
//   background-image: url(${MenuKingland});
//   background-repeat: no-repeat;
//   background-size: 80%;
//   background-position: center center;
//   transition: all 0.6s linear;
//   width: 125px;
//   height: 23px;

//   &:hover {
//     filter: grayscale(0) !important;
//   }

//   padding: 12px 10px;

//   @media screen and (max-width: 480px) {
//     padding: 2px 8px;
//     width: 100px;
//     height: 36px;
//     background-size: 80%;
//   }

//   @media screen and (max-width: 420px) {
//     padding: 0;
//     width: 100px;
//     height: 36px;
//     background-size: 80%;
//   }
// `;

// const KingPadButton = styled.div`
//   background-image: url(${MenuKingpad});
//   background-repeat: no-repeat;
//   background-size: 80%;
//   background-position: center center;
//   transition: all linear 0.6s;
//   width: 125px;
//   height: 23px;

//   &:hover {
//     filter: grayscale(0) !important;
//   }

//   padding: 12px 10px;

//   @media screen and (max-width: 480px) {
//     padding: 2px 8px;
//     width: 100px;
//     height: 36px;
//     background-size: 80%;
//   }

//   @media screen and (max-width: 420px) {
//     padding: 0;
//     width: 100px;
//     height: 36px;
//     background-size: 80%;
//   }
// `;

// const DropDownContainer = css`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   font-family: 'gotham-bold';
//   margin: 0 auto;
//   position: relative;
//   /* transition: all linear 0.6s;
//   transition: height 0.35s cubic-bezier(0.65, 0.05, 0.36, 1); */

//   &[data-aria-expanded='true'] {
//     .dcontent {
//       opacity: 1;
//     }
//   }
//   &[data-aria-expanded='false'] {
//     .dcontent {
//       opacity: 0;
//     }
//   }
// `;

// const DropdownButton = styled.div`
//   background: #1d1d1d;
//   border-radius: 28px;
//   letter-spacing: 0.875px;
//   color: ${(props) => props.theme.white};
//   text-transform: uppercase;
//   border: none;
//   padding: 0px 18px;
//   height: 47px;
//   font-size: 13px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;

//   @media screen and (max-width: 640px) {
//     background: none;
//     padding: 10px;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 10px;
//   }
// `;

// const DropDownContent = styled.div`
//   display: flex;
//   position: absolute;
//   flex-direction: column;
//   border-radius: 20px;
//   background: #1d1d1d;
//   letter-spacing: 0.875px;
//   transition: all linear 0.2s;
//   color: ${(props) => props.theme.white};

//   text-transform: uppercase;
//   top: 4rem;
//   z-index: 100;

//   @media screen and (max-width: 720px) {
//     margin-left: -20px;
//   }

//   @media screen and (max-width: 420px) {
//     margin-left: -20px;
//   }

//   @media screen and (max-width: 360px) {
//     margin-left: -40px;
//   }

//   &:hover {
//     .btn-kingfloki,
//     .btn-kingland,
//     .btn-kingpad {
//       filter: grayscale(1) brightness(0.5);
//     }
//   }
// `;
// const DropdownItem = styled.div`
//   padding: 15px 20px;

//   cursor: pointer;
//   color: ${(props) => props.theme.white};
//   transition: all linear 0.6s;
//   &:hover {
//     /* filter: grayscale(0) !important; */
//     color: ${(props) => props.theme.blackAlpha};
//   }
// `;

// const DesktopDropDownContainer = styled.div`
//   ${DropDownContainer};
//   display: flex;
//   @media screen and (max-width: 1096px) {
//     display: none;
//   }
// `;

// const MobileDropDownContainer = styled.div`
//   ${DropDownContainer};
//   display: none;
//   @media screen and (max-width: 1096px) {
//     display: flex;
//   }
// `;

// const Alink = styled.a`
//   outline: none;
//   text-decoration: none;
// `;

// const DeskWalletButton = styled.div`
//   display: block;
//   @media screen and (max-width: 1096px) {
//     display: none;
//   }
// `;

// const MobileWalletButton = styled.div`
//   display: none;
//   @media screen and (max-width: 1096px) {
//     display: block;
//   }
// `;
