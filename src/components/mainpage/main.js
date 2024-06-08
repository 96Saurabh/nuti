import React, { useEffect, useRef } from 'react';
import './main.css';

const MainPage = () => {
    const listRef = useRef(null);
    const carouselRef = useRef(null);
    const runningTimeRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const resetTimeAnimation = () => {
        const runningTime = runningTimeRef.current;
        if (runningTime) {
            runningTime.style.animation = 'none';
            // Trigger reflow by reading a property
            void runningTime.offsetHeight;
            runningTime.style.animation = 'runningTime 7s linear 1 forwards';
        }
    };

    const showSlider = (type) => {
        const list = listRef.current;
        const carousel = carouselRef.current;
        const sliderItemsDom = list.querySelectorAll('.carousel .list .item');

        if (type === 'next') {
            list.appendChild(sliderItemsDom[0]);
            carousel.classList.add('next');
        } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            carousel.classList.add('prev');
        }

        setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext);

        resetTimeAnimation();
    };

    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    let runNextAuto;

    useEffect(() => {
        runNextAuto = setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext);

        resetTimeAnimation();
    }, []);

    return (
        <div>
            <header>
                <nav>
                    <a href="#" className="active">Nuti</a>
                    <a href="#" className="active">Home</a>
                    <a href="#">About</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            <div className="carousel" ref={carouselRef}>
                <div className="list" ref={listRef}>
                    {/* Repeat this block for each item */}
                    <div className="item" style={{ backgroundImage: "url(image/makhana.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(image/makhana_1.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div><div className="item" style={{ backgroundImage: "url(image/makhana_3.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div><div className="item" style={{ backgroundImage: "url(image/makhana_2.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(image/makhana_0.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(image/parrot1.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(image/owl2.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(image/owl1.jpg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(image/kingfirser2.jpeg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: "url(image/heron.jpeg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    {/* Add other items similarly */}
                </div>

                <div className="arrows">
                    <button className="prev" ref={prevBtnRef} onClick={() => showSlider('prev')}>{'<'}</button>
                    <button className="next" ref={nextBtnRef} onClick={() => showSlider('next')}>{'>'}</button>
                </div>

                <div className="timeRunning" ref={runningTimeRef}></div>
            </div>
        </div>
    );
};

export default MainPage;
