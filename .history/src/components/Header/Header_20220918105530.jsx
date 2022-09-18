import React from 'react';
import RouteList from '../../routes/RouteList';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
        <header>
            <ul>
                <li><Link to='/'>Магазин книг</Link></li>
            </ul>
        </header>
        <RouteList/>
        </>
    );
}

export default Header;
