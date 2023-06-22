import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

export const increment = (): Action => ({
    type: 'INCREMENT'
});

export const decrement = (): Action => ({
    type: 'DECREMENT'
});

export const asyncIncrement = (): ThunkAction<
    void,
    RootState,
    null,
    Action<string>
> => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
};
interface SetWalletAction extends Action {
    type: 'SET_WALLET';
    payload: string;
}
export const setWalletAddress = (walletAddress: string): SetWalletAction => {

    return {
        type: "SET_WALLET",
        payload: walletAddress
    }
};
