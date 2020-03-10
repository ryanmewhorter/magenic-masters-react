import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'src/store/Store';
import { getProducts } from 'src/store/Products';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

function Products(props: any): JSX.Element {
    const { productsFromState } = props;

    const [products, setProducts] = useState(productsFromState);

    const onPurchaseClick = (product: any) => {
        // console.info(`products before = ${JSON.stringify(products)}`);
        if (product.quantity && product.quantity > 0) {
            product.quantity--;
        }
        setProducts({
            ...products,
            product
        });
        console.info(`products after = ${JSON.stringify(products)}`);
    };

    return (
        <div id="products">
            <h1 className="col-12">
                Products
                {/* <button
                    type="button"
                    className="btn btn-primary ml-3"
                    onClick={() => {
                        actions.getProducts();
                    }}
                >
                    Get Products
                </button> */}
            </h1>
            {productsFromState.map((product: any) => {
                const soldOut: boolean = product.quantity <= 0;
                return (
                    <div
                        key={product.name}
                        className="col-12 col-sm-6 col-md-4 float-left"
                    >
                        <div className="card">
                            {product.imageUrl ? (
                                <img
                                    className="card-img-top"
                                    alt={product.name}
                                    src={product.imageUrl}
                                />
                            ) : null}
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text w-50 float-left">
                                    <span>${product.price}</span>
                                    {' - '}
                                    <span
                                        className={soldOut ? 'text-danger' : ''}
                                    >
                                        {!soldOut
                                            ? product.quantity + ' left'
                                            : 'Sold out'}
                                    </span>
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm float-right"
                                    onClick={() => onPurchaseClick(product)}
                                    disabled={soldOut ? true : undefined}
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state: StoreState) => ({
    productsFromState: state.products.products // TODO: Look into why the store is structured like this
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        actions: bindActionCreators({ getProducts }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
