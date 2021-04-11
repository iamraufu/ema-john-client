import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams()
    const [product, setProduct] = useState({})
        // eslint-disable-next-line
        //     const [loading, setLoading] = useState(true)

    useEffect(() => {
            fetch('https://emaajohn.herokuapp.com/products' + productKey)
                .then(res => res.json())
                .then(data => {
                    setProduct(data);
                })
        }, [productKey])
        // const product = fakeData.find(pd=>pd.key === productKey);

    return ( 
        <div >
        <Product showAddToCard = { false } product = { product }> </Product> </div>
    );
};

export default ProductDetail;