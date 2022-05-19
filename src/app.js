import React from 'react'
import Navbar  from './components/navbar.js';
import MasBuscados from './components/mas-buscados.js';
import Novedades from './components/novedades.js';
import Footer from './components/footer.js';

const App = () => {
    return (
        <>
            <Navbar/>
            <MasBuscados/>
            <Novedades/>
            <Footer/>
        </>
    )
}

export default App
