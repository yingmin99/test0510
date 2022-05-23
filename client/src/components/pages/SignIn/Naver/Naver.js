import React, { useEffect } from 'react';
import { NAVER_JAVASCRIPT_KEY } from "../../../Config";
import { NAVER_CALLBACK_URL } from "../../../Config";
const { naver } = window;

const Naver = (props) => {
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_JAVASCRIPT_KEY,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false, // popup 형식으로 띄울것인지 설정
            loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
        });
        naverLogin.init();
    };

    useEffect(() => {
        initializeNaverLogin();
    });

    return (
        <div id='naverIdLogin' />
    )
}

export default Naver;
