import React, { useState } from "react";
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

export const Slider = () => {
    const slides = [
        "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUZxXgJxbEvS_d6tgA7tP8rbxNJ1ehl1KPA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8EqU8C0UOgdzC_6KIccR2O_j27T9EAeuOg&usqp=CAU"
    ];
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='post_component_slider'>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        className="control_image"
                        key={index}
                    >
                        {index === current && (
                            <img src={slide} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })}
            <div className="post_component_slider_controls">
                <BsArrowLeftShort className='left-arrow' onClick={prevSlide} />
                <BsArrowRightShort className='right-arrow' onClick={nextSlide} />
            </div>
        </section >
    );
}
