import React from 'react';

const ProductData =()=>{
    return(
        <div className='mx-auto'>
              <div className='text-center md:text-center'>
                <input type="search" placeholder='serach here' className='px-2 py-2 rounded outline-0 border-[1px] border-gray-300 mx-auto w-96 hover:border-1 hover:border-gray-700 shadow-md cursor-pointer' />
              </div>
              <div className='flex flex-wrap mt-10 '>
                  <div className='w-3xs border-1 shadow-md rounded-md p-3 mx-auto'>
                      <div><img src="" alt="Image" className='w-full h-32' /></div>
                      <div className='h-32 mt-3 mb-2 m-3'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores.</p></div>
                      <div><button className=' mt-3 border-1 border-blue-1 px-2 py-1 max-w-60 rounded cursor-pointer'>One</button></div>
                  </div>
              </div>
        </div>
    )
}
export default ProductData;