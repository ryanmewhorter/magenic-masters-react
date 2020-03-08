import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { library } from '@fortawesome/fontawesome-svg-core';
import { loadFontAwesomeIcons } from 'src/utils/FontAwesome';
import { ReduxState } from 'src/store/Store';
import Home from 'src/pages/Home/Home';
import Products from 'src/pages/Products/Products';
import Inventory from 'src/pages/Inventory/Inventory';

import 'src/App.scss';
import Header from './components/Header/Header';

function App(): JSX.Element {
    library.add(...loadFontAwesomeIcons());
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={Home}
                    />
                    <Route
                        exact
                        path='/products'
                        component={Products}
                    />
                    <Route
                        exact
                        path='/inventory'
                        component={Inventory}
                    />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </HelmetProvider>
    );
}

const mapStateToProps = (state: ReduxState) => ({
    // themeType: state.theme.themeType
});

export default connect(mapStateToProps)(App);
