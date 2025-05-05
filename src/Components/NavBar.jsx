import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = ({searchProducts, updatecart}) => {
  
  return ( 
    <>
      <div className="bg-[#131921] py-[2px] xl:px-8 flex items-center justify-around">
        <Link to="/">
          <img className="w-12 md:w-22 xl:w-26 cursor-pointer"  src="../images/icons/amazon-logo-white.png" alt="" />
        </Link>
        <div className="flex justify-center ">
          <input className="bg-white w-40 sm:w-80 md:w-100 lg:w-150 xl:w-200 h-10 outline-none ps-5 rounded-tl-sm rounded-bl-sm border-none"type="text"placeholder="Search"
            onChange={searchProducts}
          />
          <button className="bg-[#FEBD69] h-10 w-10 flex justify-center items-center cursor-pointer rounded-tr-sm rounded-br-sm">< IoSearchSharp /></button>
        </div>

        <p className="hidden sm:block text-white text-sm lg:text-md font-medium p-3 border border-transparent hover:border-white cursor-pointer">Returns <br /> & Orders</p>


        <div className="flex">
          <Link to="/CartPage">
            <p className='text-white text-center mb-0'>{updatecart}</p>
            <button className="cursor-pointer"><img className="w-6 lg:w-8" src="../images/icons/cart-icon.png" /></button>
          </Link>
        </div>
        
        <div className="block sm:hidden bg-white p-2">
          <GiHamburgerMenu />
        </div>
      </div>
    </> 
  );
}
 
export default NavBar;