import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function Auth(SpecificComponent, option, adminRoute = null) {
    //SpecificComponent : 특정 컴포넌트

    //option : 출입 조건
    // -null => 아무나 출입이 가능하다.
    // -true => 로그인한 회원만 출입이 가능하다.
    // -false => 로그인 안한 회원만 출입이 가능하다.

    //adminRoute : 어드민 출입 조건
    // -기본값 => =null
    // -true => 어드민만 출입이 가능하다.
    function AuthenticationCheck() {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                //로그인 하지 않음
                if (!response.payload.isAuth) {
                    if (option) {
                        navigate('/sign-in')
                    }
                } else {
                    //로그인 함
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    } else {
                        if (option === false) {
                            navigate('/')
                        }
                    }
                }
            })
        })

        return (<SpecificComponent />)
    }
    return AuthenticationCheck
}