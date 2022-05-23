import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Wtg(와따공)</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/wifi.jpg')}
                            text='주변 공공 와이파이 정보를 확인해보세요.'
                            label='WI-FI'
                            path='/wtg_w'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/ttareung1.jpg')}
                            text='주변에 따릉이 위치 정보를 확인해보세요.'
                            label='따릉이'
                            path='/wtg_t'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/wtg05.jpg')}
                            text='청년 공간 정보를 확인해보세요.'
                            label='청년 공간'
                            path='/wtg_g'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards