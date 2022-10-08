import React from 'react'

import '../Assets/css/pages/Welcome.css'

import Planet from '../Assets/img/photos/Planet.svg'
import Header from '../Components/Header'
const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome_general'>
                <Header />
                <div className='welcome_content'>
                    <div className='welcome_image'>
                        <img src={Planet} alt='planet' className='welcome_planet' />
                    </div>
                    <div className='welcome_presentation'>
                        <div className='welcome_title'>
                            <span className='welcome_title_span'>iWeb</span>
                            <span className='welcome_title_span welcome_title_span_blue'>TMT</span>
                        </div>
                        <span className='welcome_second_title'>Identifying Web Technologies based on Market Trends (Identificando tecnologias da Web com base nas tendências de mercado)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
