import CartPage from "./Components/CartPage"
import { products } from '../products'
import { useState } from "react"
import Home from "./Components/Home"
import {Routes, Route} from 'react-router-dom'


function App() {

  const [filterproduct, setFilterProduct] = useState('');
  const [updatecart, setUpdateCart] = useState(0);

  const updateCartQuantity = () => {
    setUpdateCart((u) => u + 1)
  }

  const searchProducts = (e) => {
    setFilterProduct(e.target.value.toLowerCase())
  }

  const filterProducts = products.filter(product => {
    return product.name.toLowerCase().includes(filterproduct)
  })

  

  return (
    <div>

      <Routes>

        <Route 
          path="/" 
          element={<Home 
            updatecart={updatecart}
            updateCartQuantity={updateCartQuantity}
            searchProducts={searchProducts}
            products={filterProducts}
          />} 
        />

        <Route path="/CartPage" element={<CartPage 
          updatecart={updatecart}
          />} 
        />

      </Routes>  
    </div>
    
  )
}

export default App
