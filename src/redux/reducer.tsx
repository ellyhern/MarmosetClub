import { combineReducers, Action } from 'redux';
interface WalletAddress {
    address: string;
}
const counterInitialState: WalletAddress = {
    address: ""
};
interface SetWalletAction extends Action {
    type: 'SET_WALLET';
    payload: string;
}
const counterReducer = (state: WalletAddress = counterInitialState, action: SetWalletAction) => {
    switch (action.type) {
        case 'SET_WALLET':
            return { address: action.payload };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    wallet: counterReducer
});
