import React from 'react';
import constants from 'src/constants/Application';
import { Link } from 'react-router-dom';
import 'src/pages/Home/Home.scss';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home(): JSX.Element {
    return (
        <div id='home'>
            <h1 className='text-center'>{constants.STORE_NAME}</h1>
            <p className='col-12 text-center' ><Link to='/products'><FontAwesomeIcon icon={faShoppingCart} /> Shop now</Link></p>
        </div>
    );
}
