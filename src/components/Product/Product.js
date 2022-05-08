import React from 'react';
import './Product.css';
const Product = ({product}) => {
    console.log(product);
    return (
        <div className='col-md-4 col-sm-6 mx-auto'>
            <h2>{product.name}</h2>
            <img src={product.img} className="img-fluid" alt="" />
        </div>
    );
};

export default Product;