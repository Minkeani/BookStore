import React from 'react';
import './Filter.css'

const Filter = () => {
    return (
        <nav className='Navigate' id='project'>
        <ul>
            <li className={activeProject === 'site' ? styles.active : ''} onClick={() => setActiveProject('site')}>Site</li>
            <li className={activeProject === 'game' ? styles.active : ''} onClick={() => setActiveProject('game')}>Game</li>
            <li className={activeProject === 'task' ? styles.active : ''} onClick={() => setActiveProject('task')}>Task</li>
        </ul>
    </nav>
    );
}

export default Filter;
