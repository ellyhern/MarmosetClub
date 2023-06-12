import React, { useCallback, useContext, useEffect } from 'react';
import { getWalletBySource } from '@subwallet/wallet-connect/dotsama/wallets';
import { getEvmWalletBySource } from '@subwallet/wallet-connect/evm/evmWallets';
import { useNavigate } from 'react-router-dom';
import { OpenSelectWallet, WalletContext } from '../subwalletcomponents/contexts';
import SelectWallet from '../subwalletcomponents/components/SelectWallet';

export const WalletModal = () => {
  const openSelectWalletContext = useContext(OpenSelectWallet);
  const walletContext = useContext(WalletContext);
  const navigate = useNavigate();

  const onSelectWallet = useCallback(
    (walletKey: any, walletType: 'substrate' | 'evm' = 'substrate') => {

      if (walletType === 'substrate') {
        walletContext.setWallet(getWalletBySource(walletKey), walletType);
        // openSelectWalletContext.close();
        // navigate('/wallet-info');
      } else {
        walletContext.setWallet(getEvmWalletBySource(walletKey), walletType);
        // openSelectWalletContext.close();
        // navigate('/evm-wallet-info');
      }
    },
    [navigate, openSelectWalletContext, walletContext]
  );
  return (
    <div className="modal modal--auto fade" id="modal-wallet" tabIndex={-1} aria-labelledby="modal-wallet" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <button className="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>
            <h4 className="modal__title">Connect Wallet</h4>
            <p className="modal__text">Choose one of available wallet providers or create a new wallet.</p>
            <SelectWallet onSelectWallet={onSelectWallet} />
          </div>
        </div>
      </div>
    </div>
  );
};