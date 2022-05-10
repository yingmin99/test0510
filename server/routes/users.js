const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.post('/register', (req, res) => {
    //회원가입시 Client가 입력한 데이터들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({
            success: false,
            err
        })
        return res.status(200).json({
            success: true
        });
    });
});

router.post('/login', (req, res) => {
    //console.log(req.body);
    if (req.body.oAuthId) { // 소셜 계정으로 로그인시
        //요청 body에 oAuthId 키가 존재하는지 체크한다.
        //만일 존재한다면, DB에 해당 oAuthId를 갖고있는 유저를 탐색한다.
        User.findOne({ oAuthId: req.body.oAuthId }, (err, user) => {
            if (!user) {
                const userSchema = new User(req.body);
                // 계정 생성
                userSchema.save((err, userInfo) => {
                    //  console.log("카카오 계정 생성 완료.");
                    if (err) return res.json({
                        success: false,
                        err
                    });
                    return res.status(200).json({
                        registerSuccess: true,
                    });
                });
            }

            //JWT 토큰 발급
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                // save Token at Cookie
                res.cookie("x_auth", user.token) //쿠키에 JWT토큰을 넣어준다.
                    .status(200)
                    .json({
                        loginSuccess: true,
                        userId: user._Id,
                        token: user.token
                    });
            });
        });
        return;
    } else { //일반 계정으로 로그인시
        //로그인시 Client가 입력한 email이 DB에 있는지 확인한다.
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (!user) {
                return res.json({
                    loginSuccess: false,
                    message: "입력한 이메일에 해당하는 회원이 없습니다."
                })
            }

            //DB에 존재한다면 Client가 입력한 password가 맞는지 확인한다.
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch)
                    return res.json({
                        loginSuccess: false,
                        message: "비밀번호가 틀립니다."
                    })
                //password가 일치한다면 토큰을 생성한다.
                user.generateToken((err, user) => {
                    if (err) return res.status(400).send(err);
                    //토큰을 cookie에 저장한다.
                    res.cookie("x_authExp", user.tokenExp);
                    res.cookie("x_auth", user.token)
                        .status(200)
                        .json({
                            loginSuccess: true,
                            userId: user._id,
                            token: user.token,
                        });
                });
            });
        });
    }
});

router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        idAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastName: req.user.lastName,
        role: req.user.role,
        image: req.user.image,
    });
});

router.get('/logout', auth, (req, res) => {

    User.findOneAndUpdate({
        _id: req.user._id
    }, {
        token: "",
        tokenExp: ""
    }, (err, user) => {
        if (err) return res.json({
            success: false,
            err
        });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;