import React from 'react';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className={'App'}>
            <div>qwerty</div>
            <div className={'App__Rectangle'} />
            <canvas className={'App__Canvas'} />
        </div>
    );
};

export default App;
