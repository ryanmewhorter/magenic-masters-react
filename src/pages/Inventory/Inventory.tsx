import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'src/store/Store';
import { getProducts } from 'src/store/Products';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

function Inventory(props: any): JSX.Element {
    const { products, actions } = props;
    return (
        <div id="inventory">
            <p>Hello</p>
        </div>
    );
}

const mapStateToProps = (state: StoreState) => ({
    products: state.products.products // TODO: Look into why the store is structured like this
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        actions: bindActionCreators({ getProducts }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
