import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Product(props) {
      // console.log(props)
      const { img, price, seller, name, stock } = props.product
      return (
            <div className='product'>
                  <img src={img} alt="logo" />
                  <h2>${price}</h2>
                  <h6>By <small>{seller}</small></h6>
                  <a href="https://github.com/iamraufu">{name}</a>
                  <h4>Only {stock} pieces left in stock</h4>
                  <button onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>

      )
}

export default Product;