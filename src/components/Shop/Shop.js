import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {

      // eslint-disable-next-line
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);
      const [search, setSearch] = useState('');

      useEffect(() => {
            fetch('https://emaajohn.herokuapp.com/products?search=' + search)
                  .then((response) => response.json())
                  .then(data => setProducts(data))
      }, [search])

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

      const handleSearch = event =>{
            setSearch(event.target.value);
      }

      const handleAddProduct = (product) => {
            const toBeAddedKey = product.key
            const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
            let count = 1;
            let newCart;
            if (sameProduct) {
                  count = sameProduct.quantity + 1;
                  sameProduct.quantity = count;
                  const others = cart.filter(pd => pd.key !== toBeAddedKey)
                  newCart = [...others, sameProduct]
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
                        <input style={{width:'94%',paddingRight:'2%'}} onBlur={handleSearch} type="text" name="search" placeholder="search"/>
                        <input type="submit" value="submit"/>
                        <div className="product-container">
                              {
                                    products.length === 0 && <p>Loading...</p>
                              }
                              {
                                    products.map(pd => <Product showAddToCard={true} handleAddProduct={handleAddProduct} product={pd} key={pd.key}></Product>)
                              }
                        </div>
                        <div className="cart-container">
                              <Cart cart={cart}>
                                    <Link to='/review'>
                                          <button>Review Your Order</button>
                                    </Link>
                              </Cart>
                        </div>
                  </div>
            </div>

      );
};

export default Shop;