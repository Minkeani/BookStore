import React, { useState, useEffect } from 'react';
import styles from './Filter.module.css'

const Filter = ({priceFunc, titleFunc, autorFunc, filter}) => {

    const handleClick = (val) => {
        switch (val) {
            case 'Цена ↓':
              priceFunc(filter)
              break;
            case 'Название':
                titleFunc(filter)
            break;
            case 'Автор':
                autorFunc(filter)
            break;
            default:
              alert( "Нет таких значений" );
          }
        
    }
    useEffect(() => {
  
    }, [priceFunc]);


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
