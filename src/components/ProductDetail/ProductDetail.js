import React from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
      const {productKey} = useParams()
      return (
            <div>
                  <h1>{productKey} Detail Will Be Added Soon</h1>
            </div>
      );
};

export default ProductDetail;