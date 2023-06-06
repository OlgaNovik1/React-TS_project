import React, { useState } from 'react';
import Product from './components/Product';
import { products } from './data/products';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='container mx-auto max-w-2xl pt-5 font-bold'>
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />


    </div>
  )

}

export default App;
