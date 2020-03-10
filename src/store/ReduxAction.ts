export enum ReduxActionType {
    CREATE_PRODUCT = 'ADD_PRODUCT',
    GET_PRODUCTS = 'GET_PRODUCTS',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT'
}
export default interface ReduxAction {
    type: ReduxActionType;
}
