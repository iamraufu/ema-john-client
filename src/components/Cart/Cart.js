import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
      const cart = props.cart
      const total = Math.round((cart.reduce((total, pd) => total + pd.price, 0))*100)/100;
      const tax =  Math.round((total/10)*100)/100;

      let shipping = 0;
      if (total > 200) {
            shipping = 0;
      }
      else if(total > 100){
            shipping = 7.99; 
      }
      else if(total > 0){
            shipping = 15.99;
      }

      const totalBeforeTax = Math.round((total+shipping)*100)/100;
      const orderTotal = Math.round((total + shipping + tax)*100)/100;
      return (
            <div>
                  <div>
                        <h3>Order Summary</h3>
                        <p>Items ordered: {cart.length}</p>
                  </div>

                  <div className="cart-summary">
                        <p>Items Cost: ${total}
                              <br />
                              Shipping & Handling: ${shipping}
                              <br />
                              Total Before Tax:	${totalBeforeTax}
                              <br />
                              Estimated Tax: ${tax}
                              <br />
                        </p>
                        <h4 className="order-total">Order Total: ${orderTotal}</h4>
                        <Link to='/review'>
                              <button>Review Your Order</button>
                        </Link>
                        
                  </div>
            </div>
      );
};

export default Cart;