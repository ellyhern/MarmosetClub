import styled from 'styled-components';
import { ConnectButton } from '@rainbow-me/rainbowkit';
export const CustomConnectButton = () => {
    return (
        <ConnectButton.Custom>
            {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const isReady = mounted && authenticationStatus !== 'loading';
                const hasConnected =
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    isReady &&
                    account != null &&
                    chain != null &&
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    (!authenticationStatus || authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!isReady && {
                            'aria-hidden': true,
                            style: {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none'
                            }
                        })}
                    >
                        {(() => {
                            if (!hasConnected) {
                                return (
                                    <button type="button"
                                        onClick={openConnectModal}
                                        className="header__cta"
                                        style={{ color: "white", fontSize: "14px" }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" /></svg>
                                        CONNECT
                                    </button>
                                );
                            }
                            if (chain.unsupported ?? false) {
                                return (
                                    <button type="button"
                                        onClick={openChainModal}
                                        className="header__cta"
                                        style={{ color: "white", fontSize: "14px" }}
                                    >
                                        WRONG NETWORK
                                    </button>
                                );
                            }
                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <button type="button"
                                        onClick={openAccountModal}
                                        className="header__cta"
                                        style={{ color: "white", fontSize: "14px" }}
                                    >
                                        {account.displayName}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom >
    );
};
