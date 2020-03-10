import ReduxAction, { ReduxActionType } from './ReduxAction';

export interface Product {
    name: string;
    price: number;
    quantity: number;
    imageUrl?: string;
}

export interface ReduxProductsState {
    products: Product[];
}

const initialState: ReduxProductsState = {
    products: [
        {
            name: 'Cherry Blossom Sapling',
            price: 34.99,
            quantity: 6,
            imageUrl:
                'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        } as Product,
        {
            name: 'Oak Sapling',
            price: 20.99,
            quantity: 0,
            imageUrl:
                'https://images.unsplash.com/photo-1446388356081-508ba00ad58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        } as Product,
        {
            name: 'Loblolly Pine Seedling',
            price: 84.99,
            quantity: 13,
            imageUrl:
                'https://images.unsplash.com/photo-1564860924912-f27764fd2ab6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        } as Product,
        {
            name: 'Red Maple Seedling',
            price: 46.99,
            quantity: 30,
            imageUrl:
                'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
    ]
};

export interface ReduxGetProductsPayload {
    products: Product[];
}

export interface ReduxCreateProductPayload {
    product: Product;
}

export interface ReduxGetProductsAction extends ReduxAction {
    type: ReduxActionType.GET_PRODUCTS;
    payload: ReduxGetProductsPayload;
}

export interface ReduxCreateProductAction extends ReduxAction {
    type: ReduxActionType.CREATE_PRODUCT;
    payload: ReduxCreateProductPayload;
}

export function getProducts(products: Product[]): ReduxGetProductsAction {
    return {
        type: ReduxActionType.GET_PRODUCTS,
        payload: { products: products }
    };
}

export function createProduct(product: Product): ReduxCreateProductAction {
    return {
        type: ReduxActionType.CREATE_PRODUCT,
        payload: { product: product }
    };
}

type TProductsReducerActions = ReduxGetProductsAction;
export const reducer = (
    state: ReduxProductsState = initialState,
    action: TProductsReducerActions
) => {
    switch (action.type) {
        case ReduxActionType.GET_PRODUCTS:
            return { ...state, products: action.payload.products };
        default:
            return state;
    }
};
