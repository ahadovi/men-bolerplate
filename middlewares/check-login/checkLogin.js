const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    const {authorization} = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.COOKIE_SECRET);
        const {userName, userId} = decode;
        req.userId = userId;
        req.userName = userName;
        next();
    } catch {
        next('Authentication failed!');
    }
};

module.exports = checkLogin;
