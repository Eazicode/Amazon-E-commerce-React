import '../index.css'
import ProductDetails from './ProductDetails';

const Product = ({ products, updateCartQuantity}) => {

  return ( 
    <>
      {products.map((product) => {
        return(
          <ProductDetails
            key={product.id}  
            product={product}
            updateCartQuantity ={updateCartQuantity}
          />
        )
        })
      }
    </>
   );
}
 
export default Product;