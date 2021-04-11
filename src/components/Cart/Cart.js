import React from 'react';
import './Cart.css'

const Cart = (props) => {
      const cart = props.cart
      // let total = Math.round((cart.reduce((total, pd) => total + pd.price*pd.quantity || 0, 0))*100)/100;
      let total = 0;
      for(let i = 0; i< cart.length; i++){
            const product = cart[i];
            console.log(product.price, product.quantity)
            total = total + product.price * product.quantity || 1;
        }
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
                        {
                              props.children
                        }
                  </div>
            </div>
      );
};

export default Cart;