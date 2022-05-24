import React from 'react'
import Navbar  from './components/navbar.js';
import Footer from './components/footer.js';
import CardSlider from './components/card-slider.js';
import axios from 'axios';


const App = () => {
    return (
        <>
            <Navbar/>
            <CardSlider />
            <CardSlider/>
            <CardSlider/>
        
            <Footer/>
        </>
    )
}

export default App
