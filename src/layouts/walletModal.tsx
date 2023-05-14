export const WalletModal = () => {
  return (
    <div className="modal modal--auto fade" id="modal-wallet" tabIndex={-1} aria-labelledby="modal-wallet" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <button className="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>

            <h4 className="modal__title">Connect Wallet</h4>

            <p className="modal__text">Choose one of available wallet providers or create a new wallet.</p>

            <a href="#" className="modal__wallet">
              <img src="img/wallet/metamask.svg" alt="" />
              <span>MetaMask</span>
            </a>

            <a href="#" className="modal__wallet">
              <img src="img/wallet/coinbase.svg" alt="" />
              <span>Coinbase Wallet</span>
            </a>

            <a href="#" className="modal__wallet">
              <img src="img/wallet/walletconnect.svg" alt="" />
              <span>WalletConnect</span>
            </a>

            <a href="#" className="modal__wallet">
              <img src="img/wallet/myetherwallet.svg" alt="" />
              <span>MyEtherWallet</span>
            </a>

            <a href="#" className="modal__wallet">
              <img src="img/wallet/fortmatic.svg" alt="" />
              <span>Fortmatic</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};