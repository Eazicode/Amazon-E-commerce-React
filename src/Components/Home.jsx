import NavBar from './NavBar'
import ProductsContainer from './ProductsContainer';


const Home = ({updatecart, searchProducts, products, updateCartQuantity }) => {
  return ( 
    <>
      <NavBar 
        updatecart={updatecart}
        searchProducts={ searchProducts}
      />
            
      <ProductsContainer 
        products={products}
        updateCartQuantity = {updateCartQuantity}
      />
    </>
   );
}
 
export default Home;