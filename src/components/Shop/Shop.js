import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
      const f10 = fakeData.slice(0, 80);
      const [products, setProducts] = useState(f10);
      const [cart, setCart] = useState([]);

      useEffect(() => {
            // Cart data 
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart)
            const previousCart = productKeys.map(existingKey => {
                  const product = fakeData.find(pd => pd.key === existingKey);
                  product.quantity = savedCart[existingKey];
                  return product;
            });
            setCart(previousCart);
      }, [])

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

export default Shop;