import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products}) => {
  return (
    <div class="py-10">
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, libero non scelerisque ullamcorper, dolor nisl molestie mi, non molestie enim orci sit amet metus. Proin pharetra erat velit, sed elementum sapien sollicitudin et. Praesent est nisi, consequat nec mollis quis, porta eu enim. Donec velit velit, congue a lorem quis, rhoncus lobortis libero.

            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
          {
            products.map((item) => (
              <ProductCard key={item._id} product={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default Products