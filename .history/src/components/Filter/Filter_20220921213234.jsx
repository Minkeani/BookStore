import React, { useState } from 'react';
import styles from './Filter.module.css'

const Filter = ({priceFunc, filter, setFilter}) => {

    console.log(filter);

    const handleClick = (val) => {
        switch (val) {
            case 'Цена ↓':
              priceFunc(filter)
              break;
            case 'Название':

            break;
            case 'Автор':

            break;
            default:
              alert( "Нет таких значений" );
          }
        
    }


    return (
        <nav className={styles.Navigate} id='project'>
        <ul>
            <li  onClick={() => handleClick('Цена ↓')}>Цена ↓</li>
            <li onClick={() => handleClick('Название')}>Название</li>
            <li  onClick={() => handleClick('Автор')}>Автор</li>
        </ul>
    </nav>
    );
}

export default Filter;
