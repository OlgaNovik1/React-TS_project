import React, { useContext } from 'react'
import { useProduct } from '../hooks/products';
import { ModalContext } from '../context/ModalContext';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Product from '../components/Product';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { IProduct } from '../models';


function ProductsPage() {
    const { products, isLoading, error, addProduct } = useProduct();
    const { modal, open, close } = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5 font-bold'>
            {isLoading && <Loader />}
            {error && <Error error={error} />}
            {products.map((obj) => <Product product={obj} key={obj.id} />)}

            {modal && <Modal title='Create new product' onClose={() => close()}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <button onClick={() => open()} className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'>
                add
            </button>
        </div>
    )

}

export default ProductsPage;