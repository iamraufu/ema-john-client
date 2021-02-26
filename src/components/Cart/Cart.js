import React from 'react';

const Cart = (props) => {
      const cart = props.cart
      const total = cart.reduce((total, pd) => total + pd.price, 0)
      return (
            <div>
                  <div>
                        <h3>Order Summary</h3>
                        <p>Items ordered: {cart.length}</p>
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
                              Order Total: ${total}
                        </p>
                        <button>Review Your Order</button>
                  </div>
            </div>
      );
};

export default Cart;