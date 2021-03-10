import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
      const f10 = fakeData.slice(0, 80);
      const [products, setProducts] = useState(f10);
      const [cart, setCart] = useState([]);

      const handleAddProduct = (product) => {
            const toBeAddedKey = product.key
            const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
            let count = 1;
            let newCart;
            if (sameProduct) {
                  count = sameProduct.quantity + 1;
                  sameProduct.quantity = count;
                  const others = cart.filter(pd => pd.key !== toBeAddedKey)
                  newCart= [...others, sameProduct]
            }
            else {
                  product.quantity = 1;
                  newCart = [...cart, product]
            }
            setCart(newCart);
            addToDatabaseCart(product.key, count)
      }

      return (
            <div className='container'>
                  <h1>Deals and Promotions</h1>
                  <p>Shop Today’s Deals, Lightning Deals, and limited-time discounts</p>
                  <div className='shop-container'>
                        <div className="product-container">
                              {
                                    products.map(pd => <Product showAddToCard={true} handleAddProduct={handleAddProduct} product={pd} key={pd.key}></Product>)
                              }
                        </div>
                        <div className="cart-container">
                              <Cart cart={cart}></Cart>
                        </div>
                  </div>
            </div>

      );
};

// Added in External Product Component
// function Product(props) {
//       return (
//             <div className='product'>

//                   <img src={props.product.img} alt="logo" />
//                   <h2 style={{ color: "#cc1c39" }}>${props.product.price}</h2>
//                   <h6>By {props.product.seller}</h6>
//                   <a href="">{props.product.name}</a>
//                   <h4>Only {props.product.stock} pieces left</h4>
//                   <button>Add To Cart</button>
//             </div>

//       )
// }

// const DisplayData(props){
//       return (
//             <div>
//                   <img src={props.img} alt="" />
//             </div>
//       )
// }
export default Shop;