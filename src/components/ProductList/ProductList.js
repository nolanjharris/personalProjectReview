import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../../redux/reducers/productReducer';
import './ProductList.scss';
import { addToCart, fetchCart } from '../../redux/reducers/cartReducer';

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
        // axios.get('/api/products').then(console.log());
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {
                    this.props.loading ?
                        <h1>Loading...</h1> :
                        this.props.products.map(product => {
                            return (
                                <div key={product.id}>
                                    <img src={product.img_url} alt={product.product_name} />
                                    <h2>#{product.id} {product.product_name}</h2>
                                    <span>
                                        <button>Add To Cart</button>
                                        <h3>${product.price}</h3>
                                    </span>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        cart: reduxState.cartReducer.cart,
        products: reduxState.productReducer.products,
        loading: reduxState.productReducer.loading
    }
}

export default connect(mapStateToProps, { fetchAllProducts, addToCart, fetchCart })(ProductList);