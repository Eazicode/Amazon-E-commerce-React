import '../index.css'

const Product = ({ products }) => {

  return ( 
    <>
      
      {products.map((product) => {
        return(
          <div className='p-[25px] pt-[40px] border border-gray-200' key={product.id}>
            <img className='w-60 mx-auto mb-3' src={product.image} alt="" />
            <p className='text-[16px] h-[65px]'>{product.name}</p>
            
            <div className='flex'>
              <img className='w-30' src={`../images/ratings/rating-${product.rating.stars * 10}.png`}/>
              <span className='pl-2'>{product.rating.count}</span>
            </div>

            <p className='font-bold pt-4'>{`$${(product.priceCents / 100).toFixed(2)}`}</p>

            <div className='flex justify-center px-3'>
              <button className='mt-10 bg-[#ffd814] w-full py-2 rounded-[20px] cursor-pointer'>Add to Cart</button>
            </div>
            
          </div>
        )
        
      })
      
      }
    </>
   );
}
 
export default Product;