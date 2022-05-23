import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { naverLoginUser } from "../../../../_actions/user_action";
import { NAVER_JAVASCRIPT_KEY } from "../../../Config";
import { NAVER_JAVASCRIPT_SECRET } from "../../../Config";

const Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let token = "";
    const getNaverToken = () => {
        if (!location.hash) return;
        token = location.hash.split('=')[1].split('&')[0];
        console.log(token);
    };

    const getUserInfo = () => {
        let dataToSubmit = {
            token,
            NAVER_JAVASCRIPT_KEY,
            NAVER_JAVASCRIPT_SECRET,
        };

        dispatch(naverLoginUser(dataToSubmit))
            .then(response => {
                // console.log(response);
                if (response.payload.loginSuccess) {
                    window.localStorage.setItem('userId', response.payload.userId);
                    navigate('/');
                } else {
                    console.log('error')
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getNaverToken();
        getUserInfo();
    }, []);
}

export default Callback;