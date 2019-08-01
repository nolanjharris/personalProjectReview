import axios from 'axios';

const initialState = {
    products: [],
    loading: false
}

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchAllProducts() {
    const data = fetch('/api/products').then(res => res.json());
    return {
        type: FETCH_PRODUCTS,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case `${FETCH_PRODUCTS}_FULFILLED`:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case `${FETCH_PRODUCTS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}