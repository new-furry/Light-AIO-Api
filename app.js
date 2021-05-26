const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("static"));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const secretKey = 'sk_mKq9ylU7ch3rvHpXUxt7DpSkcmSranQT';
const publicKey = 'pk_2XIxUJrI2rP3Vi2lCBMREeHGZIJx3iqp';

app.get('/', async (req, res) => {
    return res.render('auth');
});

app.get('/login', async (req, res) => {
    const key = req.query.key;

    try {
        const result = await axios.get(`https://api.hyper.co/v4/licenses/${key}`, {
            headers: {
                Authorization: `Bearer ${secretKey}`
            }
        });

        let authData = {};
        if (result.status === 200 && result.data && result.data.status === 'active') {
            authData = {
                authenticated: true,
                email: result.data.email,
                key: result.data.key,
                type: result.data.plan.type,
                discord: result.data.user.discord,
                twitter: result.data.user.twitter,
                username: result.data.user.username,
                avatar: result.data.user.photo_url,
                expire_date: result.data.cancel_at
            }
        } else {
            authData = {
                authenticated: false,
                email: result.data.email,
                key: result.data.key
            }
        }

        await res.json(authData);
    } catch (err) {
        await res.json({
            authenticated: false,
            email: undefined,
            key: undefined
        });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('---running server---')
});
