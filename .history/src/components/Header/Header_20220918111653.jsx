import React from 'react';
import RouteList from '../../routes/RouteList';
import {Link} from 'react-router-dom'
import cn from 'classnames'
import styles from './Header.module.css'
import BookBlock from '../CartBlock/BookBlock';

const Header = () => {
    return (
        <>
        <header>
            <ul className={cn(styles.topnav, active === true ? styles.responsive : '')}>
                <li><Link to='/'>Магазин книг</Link></li>
                <li><Link to='/bookBasket'><BookBlock/></Link></li>
            </ul>
        </header>
        <RouteList/>
        </>
    );
}

export default Header;
