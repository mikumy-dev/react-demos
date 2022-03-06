import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
    const style = {
        backgroundImage: `url('image/logo512.jpg')`
    }
    return (
        <>
            <Navbar />
            <Main style={style} />
        </>
    )
}

export default App