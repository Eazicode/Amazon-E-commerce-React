import { useState } from "react";

const CartItem = ({cartpro}) => {

  const [increaseItem, setIncreaseItem] = useState(1)

  const handleIncreaseItem = () => {
    setIncreaseItem(i => i + 1)
  }

  const deleteitem = () => {
    setIncreaseItem(i => i - 1)
  }
  return ( 
    <>
      <div key={cartpro.id} className=" flex pt-8 border border-gray-200">
        <img className="w-30" src={cartpro.image} alt="" />

        <div className="ps-5">
          <p>{cartpro.name}</p>
          <p>{`$${(cartpro.priceCents / 100).toFixed(2)}`}</p>

          <span className="pr-3">Quantity: {increaseItem}</span> 
          <span>
            <button className="pr-3 font-bold cursor-pointer text-blue-600" onClick={handleIncreaseItem}>Update</button>
            <button className="pr-3 font-bold cursor-pointer text-blue-600" onClick={deleteitem}>Delete</button>
          </span>
        </div>
      </div>
    </>
  )
}
 
export default CartItem;