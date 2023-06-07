import React, { useState } from 'react'
import { IProduct } from '../models';
import axios from 'axios';
import Error from './Error';
import { Interface } from 'readline';

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 43,
        count: 45,
    }
}

interface CreateModalProps {
    onCreate: (product: IProduct) => void
}


function CreateProduct({ onCreate }: CreateModalProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');



    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        productData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

        onCreate(response.data);
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder='Enter product title...'
                className='border py-2 px-4 mb-2 w-full outline-0'
                value={value}
                onChange={changeHandler}
            ></input>

            {error && <Error error={error} />}

            <button type="submit" className='border py-2 px-4 bg-yellow-400 hover:text-white'>
                Create
            </button>
        </form>
    )
}

export default CreateProduct;