import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Product(props) {
      // console.log(props.product.key)
      const { img, price, seller, name, stock,key } = props.product
      return (
            <div className='product'>
                  <img src={img} alt="logo" />
                  <h2>${price}</h2>
                  <h6>By <small>{seller}</small></h6>
                  <Link to={"/product/"+key}>{name}</Link>
                  {/* <a href="https://github.com/iamraufu">{name}</a> */}
                  <h4>Only {stock} pieces left in stock</h4>
                  { props.showAddToCard && <button onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>}
            </div>

      )
}

export default Product;