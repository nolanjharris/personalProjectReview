require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const pc = require('./controllers/product_controller');
const cc = require('./controllers/cart_controller');

const { addToCart, getCart } = cc;
const { getAllProducts } = pc;

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();


massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        console.log('DATABASE CONNECTED B-)')
    })

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(express.json());

app.get('/api/products', getAllProducts);

app.post('/api/cart', addToCart);
app.get('/api/cart', getCart)

app.listen(SERVER_PORT, () => console.log('LISTENING ON PORT ' + SERVER_PORT))



