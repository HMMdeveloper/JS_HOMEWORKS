import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card.jsx'
import './App.css'

function App() {
    return (
        <>
            <Card title={'Hi Vasya!'} />
            <Card text={'How are u, mate?'} />
            <Card title={'Hi!'} text={'How are you doing?'} />
        </>
    )
}

export default App
