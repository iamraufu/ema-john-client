import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'

const Shop = () => {
      const f10 = fakeData.slice(0, 20);
      const [products, setProducts] = useState(f10);
      return (
            <div className='container'>
                  <h1>Deals and Promotions</h1>
                  <p>Shop Today’s Deals, Lightning Deals, and limited-time discounts</p>
                  <div className='shop-container'>
                        <div className="product-container">
                              {
                                    products.map(pd => <Product product={pd}></Product>)
                              }
                        </div>
                        <div className="cart-container">
                              <div className="cart-history">
                                    <h3>Order Summary</h3>
                                    <p>Items ordered: </p>
                              </div>
                              <div className="cart-summary">
                                    <p>Items: $0
                              <br />
                              Shipping & Handling: $0
                              <br />
                              Total before tax:	$0
                              <br />
                              Estimated Tax: $0
                              <br />
                              Order Total: $0
                              </p>
                              <button>Review Your Order</button>
                              </div>
                              
                        </div>

                  </div>
            </div>

      );
};

function Product(props) {
      console.log(props)
      return (
            <div className='product'>
                  
                  <img src={props.product.img} alt="logo" />
                  <h2 style={{ color: "#cc1c39" }}>${props.product.price}</h2>
                  <h6>By {props.product.seller}</h6>
                  <a href="#">{props.product.name}</a>
                  <h4>Only {props.product.stock} pieces left</h4>
                  <button>Add To Cart</button>
            </div>

      )
}

// const DisplayData(props){
//       return (
//             <div>
//                   <img src={props.img} alt="" />
//             </div>
//       )
// }
export default Shop;