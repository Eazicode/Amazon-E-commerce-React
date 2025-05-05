import { Link } from "react-router-dom";

const CartPage = () => {
  return ( 
    <>
      <div className="bg-[#131921]">
        <Link to="/">
          <img className="w-12 md:w-22 xl:w-26 cursor-pointer"  src="../images/icons/amazon-logo-white.png" alt="" />
        </Link>
      </div>

      <h1>This is Amazon</h1>
    </>
   );
}
 
export default CartPage;