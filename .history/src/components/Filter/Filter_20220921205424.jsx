import React from 'react';
import './Filter.css'

const Filter = ({filter, setFilter}) => {
    return (
        <nav className={styles.Navigate} id='project'>
        <ul>
            <li onClick={() => setActiveProject('site')}>Site</li>
            <li onClick={() => setActiveProject('game')}>Game</li>
            <li onClick={() => setActiveProject('task')}>Task</li>
        </ul>
    </nav>
    );
}

export default Filter;
