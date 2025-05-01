import ProductsContainer from "./Components/ProductsContainer"
import { products } from '../products'


function App() {

  return (
    
    <div>
      <ProductsContainer products={products} />
    </div>
    
  )
}

export default App
