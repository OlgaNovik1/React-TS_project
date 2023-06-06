import React from 'react';
import { IProduct } from '../models';


interface ProductProps {
    product: IProduct,
}

function Product({ product }: ProductProps) {

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} className="w-1/6" alt={product.title}></img>
            {product.title}
            <div>
                price {product.price}
            </div>
            <div style={{ color: 'red' }} >
                {product.description}
            </div>



        </div>
    );
};

export default Product;