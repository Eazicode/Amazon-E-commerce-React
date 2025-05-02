import SelectQuantity from './SelectQuantity';
import { useState } from 'react';

const ProductDetails = ({product, updateCartQuantity}) => {

  const [added, setAdded] = useState('');

  const addToCart = () => {
    setAdded( 
      <div className="flex">
        <img className="w-5" src="/images/icons/checkmark.png" />
        <span className="text-green-800 ps-3">Added</span>
      </div>
    )
    
    setTimeout(() => {
      setAdded('')
    }, 3000)

    updateCartQuantity()
  }

  return ( 
    <>
      <div className='p-[25px] pt-[40px] border border-gray-200' key={product.id}>
        <img className='w-60 mx-auto mb-3' src={product.image} alt=""/>
        <p className='text-[16px] h-[50px]'>{product.name}</p>
        
        <div className='flex'>
          <img className='w-27' src={`../images/ratings/rating-${product.rating.stars * 10}.png`}/>
          <span className='pl-2'>{product.rating.count}</span>
        </div>

        <p className='font-bold pt-4'>{`$${(product.priceCents / 100).toFixed(2)}`}</p>

        <div className='mt-3 bg-[#f0f0f0] w-13 py-1 px-1 rounded-xl'>
          <SelectQuantity />
        </div>

        <div className='mt-3 mb-0 text-green-700 font-bold h-3'>{added}</div>

        <div className='flex justify-center px-3'>
          <button className='mt-7 bg-[#ffd814] w-full py-2 rounded-[20px] cursor-pointer border-none' onClick={addToCart}>Add to Cart</button>
        </div>
            
      </div>
    </>
   );
}
 
export default ProductDetails;