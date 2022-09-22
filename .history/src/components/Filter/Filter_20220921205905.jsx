import React from 'react';
import styles from './Filter.module.css'

const Filter = ({filter, setFilter}) => {
    return (
        <nav className={styles.Navigate} id='project'>
        <ul>
            <li >Цена</li>
            <li >Название</li>
            <li >Автор</li>
        </ul>
    </nav>
    );
}

export default Filter;
