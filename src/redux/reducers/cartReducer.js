import axios from 'axios';

const initialState = {
    cart: []
}

const ADD_TO_CART = 'ADD_TO_CART';
const FETCH_CART = 'FETCH_CART';

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: axios.post('/api/cart', { product })
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}

export function fetchCart() {
    return {
        type: FETCH_CART,
        payload: axios.get('/api/cart')
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload
            }
        case `${FETCH_CART}_FULFILLED`:
            return {
                ...state,
                cart: payload
            }
        default: return state;
    }
}