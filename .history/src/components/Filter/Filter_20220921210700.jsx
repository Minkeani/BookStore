import React from 'react';
import styles from './Filter.module.css'

const Filter = ({filter, setFilter}) => {

    const handleClick = (e) => {
        console.log(e.innerHTML)
    }


    return (
        <nav className={styles.Navigate} id='project'>
        <ul>
            <li  onClick={() => handleClick(e.target.value)}>Цена ↓</li>
            <li >Название</li>
            <li >Автор</li>
        </ul>
    </nav>
    );
}

export default Filter;
