import Product from "../Components/Product";

const ProductsContainer = ({ products }) => {
  return ( 
    <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'>
      <Product products = {products}/>
    </div>
   );
}
 
export default ProductsContainer;