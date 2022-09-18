import React from 'react';
import RouteList from '../../routes/RouteList';
import {Link} from 'react-router-dom'
import cn from 'classnames'
import './Header.css'
import BookBlock from '../CartBlock/BookBlock';

const Header = () => {
    return (
        <>
        <header>
            <ul>
                <li><Link to='/'>Магазин книг</Link></li>
                <li><Link to='/bookBasket'><BookBlock/></Link></li>
            </ul>
        </header>
        <RouteList/>
        </>
    );
}

export default Header;
