import React from 'react'
import Header from '../../navbar/Header.jsx'
import '../../index.css'
import Slider from '../../pages/Slider.jsx'
import Cart from '../../pages/Card.jsx'
import Productview from '../../pages/Productview.jsx'

const Userview = () => {
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=60&auto=format&fit=crop",
            alt: "ocean",
            title: "Ocean view",
            subtitle: "Feel the breeze",
        },
        {
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=60&auto=format&fit=crop",
            alt: "mountain",
            title: "Mountain escape",
            subtitle: "Adventure awaits",
        },
        {
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&q=60&auto=format&fit=crop",
            alt: "city",
            title: "City nights",
            subtitle: "Lights & motion",
        },
    ];


    return (
        <>
            <Header />
            <div className="w-screen h-screen flex items-center justify-center">
                <Slider slides={slides} autoPlay autoPlayTime={4000} />
            </div>
            <Productview />
        </>
    );
}




export default Userview