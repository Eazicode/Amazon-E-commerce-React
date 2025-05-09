import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { cartproduct } from "../../cartproduct";

const CartPage = ({updatecart}) => {

  return ( 
    <>
      <div className="bg-[#131921] h-10 flex justify-between items-center px-8">
        <Link to="/">
          <img className="w-12 md:w-20 xl:w-23 cursor-pointer"  src="../images/icons/amazon-logo-white.png" alt="" />
        </Link>

        <div className="font-bold">
          <span className="text-white pr-2">Checkout</span> 
          <span className="text-blue-300">({`${updatecart} items`}) </span>
        </div>
        

        <button>
          <img className="w-8" src="/images/icons/checkmark-white.png"/>
        </button>
      </div>

      <h1 className="text-3xl mt-20 mb-10 font-semibold ps-10">Review your order</h1>

      <div className="px-7 flex gap-5">
        <div className="w-[60%]">
          {cartproduct.map(cartpro => {
            return (
              <CartItem 
                key={cartpro.id}
                cartpro={cartpro}
              />
            )
          })}
        </div>

        <div className="w-[30%] border border-gray-200 pt-8 px-10">
          <h2 className="font-bold text-2xl">Order Summary</h2>

          <div className="mt-3 flex justify-between">
            <span>{`Items (${1}):`}</span>
            <span>$20.95</span>
          </div>

          <div className="mt-2 mb-4 flex justify-between">
            <span>Shipping & Handling:</span>
            <span>$0.00</span>
          </div>

          <div className="mt-3 flex justify-between">
            <span>Total before tax:</span>
            <span>$0.00</span>
          </div>

          <div className="my-3 flex justify-between">
            <span>Estimated tax:</span>
            <span>$0.00</span>
          </div>
          
          <hr className="border border-gray-200"/>

          <div className="mt-5 flex justify-between">
            <p>Order total:</p>
            <p>$45:00</p>
          </div>

        </div>
      </div>

    </>
   );
}
 
export default CartPage;