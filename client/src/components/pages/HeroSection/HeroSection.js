import React from 'react'
import '../../App.css';
import { Button } from '../commons/Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video autoPlay loop muted>
                <source src="/videos/video-2.mp4" type='video/mp4' />
            </video> */}
            <h1>ALLTELIER</h1>
            <p>Welcome!</p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path='sign-up'>
                    GET STARTED
                </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    path='sign-in'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection