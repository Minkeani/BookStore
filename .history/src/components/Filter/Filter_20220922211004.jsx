import React, { useState, useEffect } from 'react';
import styles from './Filter.module.css'

const Filter = ({priceFunc, titleFunc, autorFunc, filter}) => {

    const [value, setValue] = useState('')

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

    const filterInput = (value) => {
        setValue(value)
        filter = filter.filter(item => {
            item.title.includes(value)
        })
        console.log(filter);
    }

    useEffect(() => {
  
    }, [priceFunc, value]);


    return (
        <nav className={styles.Navigate} id='project'>
        <ul>
            <li  onClick={() => handleClick('Цена ↓')}>Цена ↓</li>
            <li onClick={() => handleClick('Название')}>Название</li>
            <li  onClick={() => handleClick('Автор')}>Автор</li>
        </ul>
        <input value={value} onChange={(e) => filterInput(e.target.value)} placeholder='Введите название книги' type="text" />
    </nav>
    );
}

export default Filter;
