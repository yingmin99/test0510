import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>공간 리스트</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/wtg01.jpg')}
                            text='공간1'
                            
                            path='/wtg01'
                        />
                        <CardItem
                            src={require('../images/wtg02.jpg')}
                            text='공간2'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={require('../images/wtg03.jpg')}
                            text='공간3'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        <CardItem
                            src={require('../images/wtg04.jpg')}
                            text='공간4'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                    {/* 추가 */}
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/wtg05.jpg')}
                            text='취준생들과 함께 정보를 공유해보세요.'
                            label='취준 커뮤니티'
                            path='/community'
                        />
                        <CardItem
                            src={require('../images/wtg06.jpg')}
                            text='내 주변 착한가게들을 검색해보세요.'
                            label='착한가게'
                            path='/store'
                        />
                        <CardItem
                            src={require('../images/wtg07.jpg')}
                            text='와이파이/따릉이/공간을 빌려보세요.'
                            label='와따공'
                            path='/wtg'
                        />
                        <CardItem
                            src={require('../images/wtg08.jpg')}
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