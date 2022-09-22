import React, { useState } from 'react';
import styles from './Filter.module.css'

const Filter = ({filter, setFilter}) => {

    const [value, setValue] = useState('Цена ↓')

    const priceFunc = (arr) => {

    }

    const handleClick = (val) => {
        switch (val) {
            case 'Цена ↓':

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
