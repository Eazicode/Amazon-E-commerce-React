import NavBar  from "./Components/NavBar"
import ProductsContainer from "./Components/ProductsContainer"
import { products } from '../products'


function App() {

  return (
    <div>
      <NavBar />
      
      <ProductsContainer products={products} />
    </div>
    
  )
}

export default App
