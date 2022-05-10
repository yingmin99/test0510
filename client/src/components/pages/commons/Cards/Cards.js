import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-9.jpg')}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/img-2.jpg')}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/products'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-3.jpg')}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/img-4.jpg')}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={require('../images/img-8.jpg')}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                    {/* 추가 */}
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-5.jpg')}
                            text='취준생들과 함께 정보를 공유해보세요.'
                            label='취준 커뮤니티'
                            path='/community'
                        />
                        <CardItem
                            src={require('../images/img-6.jpg')}
                            text='내 주변 착한가게들을 검색해보세요.'
                            label='착한가게'
                            path='/store'
                        />
                        <CardItem
                            src={require('../images/img-7.jpg')}
                            text='와이파이/따릉이/공간을 빌려보세요.'
                            label='와따공'
                            path='/wtg'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards