import NavBar  from "./Components/NavBar"
import ProductsContainer from "./Components/ProductsContainer"
import { products } from '../products'
import { useState } from "react"


function App() {

  const [filterproduct, setFilterProduct] = useState('');

  const searchProducts = (e) => {
    setFilterProduct(e.target.value.toLowerCase())
  }

  const filterProducts = products.filter(product => {
    return product.name.toLowerCase().includes(filterproduct)
  })

  return (
    <div>
      <NavBar searchProducts={searchProducts}/>
      
      <ProductsContainer products={filterProducts} />
    </div>
    
  )
}

export default App
