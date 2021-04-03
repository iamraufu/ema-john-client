import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
      const {productKey} = useParams()
      // eslint-disable-next-line
      const [loading,setLoading] = useState(true)
      const product = fakeData.find(pd=>pd.key === productKey);

      useEffect(()=>{
            fetch('/product/'+productKey)
            .then(res=>res.json())
            .then(data=>{
                  setLoading(false);
            })
      },[productKey])

      return (
            <div>
                  <Product showAddToCard={false} product={product}></Product>
            </div>
      );
};

export default ProductDetail;