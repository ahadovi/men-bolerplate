//== External imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

//== Router Imports
const userRoute = require('./routes/user');

//== Internal imports
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler');
const checkLogin = require('./middlewares/check-login/checkLogin');

const app = express();
dotenv.config();

//== Database Connection
mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
    console.log('Database Connection Successful')
}).catch((err) => {
    console.log(err);
});

//== Request Parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//== Set Static Folders
app.use(express.static(path.join(__dirname, 'public')));

//== Parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//== Routing Setup
app.use('/user', userRoute);

//== 404 Error Handler
app.use(notFoundHandler);

//== Default Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`App is listening to PORT: http://localhost:${process.env.PORT}`);
})
