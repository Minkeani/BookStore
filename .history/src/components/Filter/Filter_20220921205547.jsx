import React from 'react';
import styles from './Filter.module.css'

const Filter = ({filter, setFilter}) => {
    return (
        <nav className={styles.Navigate} id='project'>
        <ul>
            <li >Site</li>
            <li >Game</li>
            <li >Task</li>
        </ul>
    </nav>
    );
}

export default Filter;
