import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import funnyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
      const [cart, setCart] = useState([]);
      // eslint-disable-next-line
      const [orderPlaced, setOrderPlaced]= useState(false)
      const history = useHistory()
      const handleProceedCheckout=()=>{
            history.push('/shipment');
      }

      const removeProduct = (productKey) => {
            const newCart = cart.filter(pd => pd.key !== productKey)
            setCart(newCart);
            removeFromDatabaseCart(productKey);
      }
      useEffect(() => {
            // Cart data 
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart)
            fetch('https://emaajohn.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
      }, [])

      let gratitude = <img src={funnyImage} alt=""/>
      return (
            <div>
                  <h3>Cart Items: {cart.length}</h3>
                  <div className="shop-container">
                  <div className="product-container">
                        {
                              cart.map(pd => <ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
                        }
                        {
                              orderPlaced && gratitude
                        }
                  </div>
                  <div className="cart-container">
                        <Cart cart={cart}>
                              <button onClick={handleProceedCheckout}>Proceed Checkout</button>
                        </Cart>
                  </div>
                  </div>
                  
            </div>
      );
};

export default Review;