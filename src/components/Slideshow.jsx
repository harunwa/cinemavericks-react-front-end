import React, { useState, useEffect } from 'react';
import Shawshank from '../assets/images/Shawshank-banner.jpg';
import Matrix from '../assets/images/Matrix_banner.jpg';
import Titanic from '../assets/images/Titanic.jpg';
import Batman from '../assets/images/Batman.jpg';

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [Shawshank, Matrix, Titanic, Batman];
    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide, totalSlides]);

    return (
        <div id="slideshow" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    style={{
                        display: index === currentSlide ? 'block' : 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                />
            ))}
        </div>
    );
};

export default Slideshow;