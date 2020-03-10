import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as Products from 'src/store/Products';

const reducers = {
    products: Products.reducer
};

const rootReducer = combineReducers({
    ...reducers
});

export type StoreState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middleware = [thunk];

    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}
