import React, { useState } from 'react';
import { IProduct } from '../models';


interface ProductProps {
    product: IProduct,
}

function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasses = ['py-2 px-4 border', btnBgClassName];

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-5'>
            <img src={product.image} className="w-1/6" alt={product.title}></img>
            <p> {product.title}</p>
            <span>
                price {product.price}
            </span>
            <button style={{ borderRadius: '15px' }} className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>
                {details ? ' Hide Details' : ' Show Details'}
            </button>
            {
                details && <div>
                    <p>{product.description}</p>
                </div>
            }
            {/* <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p> */}

        </div >
    );
};

export default Product;