import React from 'react';
import './App.css';
import { Card } from './components/card';

function App() {
    const template = (
        <>
            <main>
                <div className="app container">
                    <ul className="characters-list row list-unstyled">
                        <Card></Card>
                    </ul>
                </div>
                <div className="comunications"></div>
            </main>
        </>
    );

    return template;
}

export default App;
