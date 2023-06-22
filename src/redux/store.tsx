import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducer';

export type RootState = ReturnType<typeof rootReducer>;

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, middlewareEnhancer);
