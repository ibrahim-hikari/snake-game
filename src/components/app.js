import React from 'react';

import './style.scss';

function App(props) {
    return (
        <>
            <div className='game-area'>
                <div className='snake-dot' style={{ left: '0%' }}></div>
                <div className='snake-dot' style={{ left: '2%' }}></div>
                <div className='snake-dot' style={{ left: '4%' }}></div>
            </div>
        </>
    )
}

export default App;