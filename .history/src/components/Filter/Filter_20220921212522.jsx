import React, { useState } from 'react';
import styles from './Filter.module.css'

const Filter = ({filter, setFilter}) => {

    const [value, setValue] = useState('Цена ↓')

    const priceFunc = (arr) => {
        arr.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
        setFilter(arr)
        console.log(filter);
        
    }

    const handleClick = (val) => {
        switch (val) {
            case 'Цена ↓':
              priceFunc()
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
