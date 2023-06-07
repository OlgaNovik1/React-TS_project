import React, { useState, useEffect } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';


export function useProduct() {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const addProduct = (product: IProduct) => {
        setProducts((prev) => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setError('');
            setIsLoading(true);
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProducts(response.data);
            setIsLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError
            setIsLoading(false)
            setError(error.message)
        }
    }


    useEffect(() => {
        fetchProducts();
    }, []);


    return { products, isLoading, error, addProduct }
}