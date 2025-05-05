import Product from "./Product";

const ProductsContainer = ({ products, updateCartQuantity,}) => {

  return ( 
    <>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
        <Product 
          products = {products}
          updateCartQuantity ={updateCartQuantity}
        />
      </div>
    </>
   );
}
 
export default ProductsContainer;