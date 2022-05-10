const {
    User
} = require('../models/User');

let auth = (req, res, next) => {
    //인증을 처리한다.

    //Client 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    //토큰을 복호화한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({
            isAuth: false,
            error: true
        })

        req.token = token;
        req.user = user;
        next();
    })
    //유저가 있다면 인증 성공한다.
    //유저가 없다면 인증 실패한다.
};

module.exports = { auth };