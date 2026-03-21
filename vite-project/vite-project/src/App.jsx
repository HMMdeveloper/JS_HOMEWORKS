import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import DefinitionsList from './components/Definitions'
import './App.css'

function App() {
    const definitions = [
        { dt: 'Coffee', dd: 'Black hot drink', id: 1 },
        { dt: 'Milk', dd: 'White cold drink', id: 2 },
    ];
    return (
        <>
            <DefinitionsList data={definitions} />
        </>
    )
}

export default App
