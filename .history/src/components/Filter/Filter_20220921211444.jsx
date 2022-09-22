import React, { useState } from 'react';
import styles from './Filter.module.css'

const Filter = ({filter, setFilter}) => {

    const [value, setValue] = useState('Цена ↓')

    const handleClick = (val) => {
        console.log(val);
        
    }


    return (
        <nav className={styles.Navigate} id='project'>
        <ul>
            <li value={value}  onClick={(e) => handleClick(e.target.value)}>Цена ↓</li>
            <li >Название</li>
            <li >Автор</li>
        </ul>
    </nav>
    );
}

export default Filter;
